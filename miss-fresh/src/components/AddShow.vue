<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 14 }"
  >
    <a-form-model-item label="商品价格" required prop="price">
      <a-input v-model="form.price" />
    </a-form-model-item>
    <a-form-model-item label="折扣价格" prop="price_off">
      <a-input v-model="form.price_off" />
    </a-form-model-item>
    <a-form-model-item label="商品库存" required prop="inventory">
      <a-input v-model="form.inventory" />
    </a-form-model-item>
    <a-form-model-item label="计量单位" required prop="unit">
      <a-input v-model="form.unit" />
    </a-form-model-item>
    <a-form-model-item label="商品相册" prop="images">
      <a-upload
        action="'https://www.mallapi.duyiedu.com/upload/images?appkey='+$store.state.user.appkey"
        list-type="picture-card"
        :file-list="fileList"
        @preview="handlePreview"
        @change="handleChange"
      >
        <div v-if="fileList.length < 8">
          <a-icon type="plus" />
          <div class="ant-upload-text">
            Upload
          </div>
        </div>
      </a-upload>
      <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
        <img alt="example" style="width: 100%" :src="previewImage" />
      </a-modal>
    </a-form-model-item>
    <a-form-model-item class="nextBtn">
      <a-button type="default" @click="prev">
        上一步
      </a-button>
      <a-button type="primary" @click="next">
        提交
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import apiCategory from '../api/category';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default {
  data() {
    return {
      rules: {},
      categoryList: [],
      categoryItems: [],
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-2',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-3',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-4',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-5',
          name: 'image.png',
          status: 'error',
        },
      ],
    };
  },
  props: ['form'],
  created() {
    apiCategory.list().then((res) => {
      this.categoryList = res.data;
    });
  },
  methods: {
    changeCategory(c) {
      for (let i = 0; i < this.categoryList.length; i += 1) {
        if (this.categoryList[i].id === c) {
          this.categoryItems = this.categoryList[i].c_items;
        }
      }
    },
    prev() {

    },
    next() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('next', this.form);
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
    },
    handleCancel() {
      this.previewVisible = false;
    },
  },
};
</script>
<style scoped>
.nextBtn {
  text-align: center;
  margin-left: 200px;
}
</style>
