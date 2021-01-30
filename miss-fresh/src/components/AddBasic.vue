<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="{span:4}"
    :wrapper-col="{span:14}"
  >
    <a-form-model-item ref="title" label="副标题" required prop="title">
      <a-input v-model="form.title" />
    </a-form-model-item>
    <a-form-model-item label="商品描述" prop="desc">
      <a-input v-model="form.desc" />
    </a-form-model-item>
    <a-form-model-item label="商品类目" required prop="category">
      <a-select v-model="form.category" placeholder="请选择商品类目">
        <a-select-option v-for="c in categoryList" :value="c.id" :key="c.id">
          {{ c.name }}
        </a-select-option>
      </a-select>
      <a-select v-model="form.c_item" placeholder="请添加商品子类目">
        <a-select-option v-for="c in categoryItems" :value="c" :key="c">
          {{ c.name }}
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="商品标签" prop="tags">
      <a-select
        mode="tags"
        placeholder="请选择该商品的标签"
        :default-value="['包邮，最晚次日达']"
        @change="handleChange"
      >
        <a-select-option value="包邮，最晚次日达">包邮，最晚次日达</a-select-option>
      </a-select>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import apiCategory from '../api/category';

export default {
  data() {
    return {
      form: {
        title: '',
        desc: '',
        category: '',
        c_item: [],
        tags: [],
      },
      rules: [],
      categoryList: [],
      categoryItems: [],
    };
  },
  created() {
    apiCategory.list().then((res) => {
      console.log(res);
      this.categoryList = res.data;
    });
  },
  methods: {
    onSubmit() {},
    resetForm() {
      console.log(2);
    },
    handleChange() {
      console.log(1);
    },
  },
};
</script>
