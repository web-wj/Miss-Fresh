<template>
  <div class="wrapper">
    <div class="steps">
      <a-steps :current="current">
        <a-step v-for="item in steps" :key="item.title" :title="item.title" />
      </a-steps>
    </div>
    <div class="steps-content">
      <add-basic v-if="current === 0" @next="next" :form="form" />
      <add-show v-else @next="next" @prev="prev" :form="form" />
    </div>
  </div>
</template>
<script>
import AddBasic from '../../components/AddBasic.vue';
import AddShow from '../../components/AddShow.vue';
import apiProduct from '../../api/production';

export default {
  components: {
    AddBasic,
    AddShow,
  },
  data() {
    return {
      current: 0,
      steps: [
        {
          title: '填写商品基本信息',
        },
        {
          title: '填写商品销售信息',
        },
      ],
      form: {
        title: '',
        desc: '',
        category: '',
        c_item: [],
        tags: [],
        price: 0,
        price_off: 0,
        inventory: 0,
        unit: '',
        images: [],
      },
    };
  },
  methods: {
    next(form) {
      this.form = form;
      if (this.current === 1) {
        // 提交数据
        if (this.$route.params.id) {
          apiProduct.updata(this.form).then(() => {
            this.$message.success('修改商品成功！');
            this.$router.push({
              name: 'Prolist',
            });
          });
        } else {
          apiProduct.add(this.form).then(() => {
            this.$message.success('新增商品成功！');
            this.$router.push({
              name: 'Prolist',
            });
          });
        }
      } else {
        this.current += 1;
      }
    },
    prev() {
      this.current -= 1;
    },
  },
  created() {
    const { id } = this.$route.params;
    if (id) {
      // 获取商品的详细数据
      apiProduct.getData(id).then((res) => {
        this.form = res;
        console.log(res);
      });
    }
  },
};
</script>
<style scoped>
.steps {
  margin: 0 auto 10px;
  padding: 10px 300px;
  border-bottom: 1px solid #eee;
}
.steps-content {
  background-color: #fcfcfc;
  margin: 10px;
  padding: 20px;
  max-width: 80%;
  position: relative;
  left: 660px;
  transform: translateX(-50%);
}
</style>
