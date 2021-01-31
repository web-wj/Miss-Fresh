<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 14 }"
  >
    <a-form-model-item ref="title" label="副标题" required prop="title">
      <a-input v-model="form.title" />
    </a-form-model-item>
    <a-form-model-item label="商品描述" prop="desc">
      <a-input v-model="form.desc" />
    </a-form-model-item>
    <a-form-model-item label="商品类目" required prop="category">
      <a-select v-model="form.category" placeholder="请选择商品类目" @change="changeCategory">
        <a-select-option v-for="c in categoryList" :value="c.id" :key="c.id">
          {{ c.name }}
        </a-select-option>
      </a-select>
      <a-select v-model="form.c_item" placeholder="请添加商品子类目">
        <a-select-option v-for="c in categoryItems" :value="c" :key="c">
          {{ c }}
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="商品标签" required prop="tags">
      <a-select
        mode="tags"
        placeholder="请选择该商品的标签"
        :default-value="['包邮，最晚次日达']"
        v-model="form.tags"
      >
        <a-select-option value="包邮，最晚次日达">包邮，最晚次日达</a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item class="nextBtn">
      <a-button type="primary" @click="next">
        下一步
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import apiCategory from '../api/category';

export default {
  data() {
    return {
      rules: {},
      categoryList: [],
      categoryItems: [],
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
          this.categoryItems = this.categoryList[i].c_item;
        }
      }
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
  },
};
</script>
<style scoped>
.nextBtn{
  text-align: center;
  margin-left:200px ;
}
</style>
