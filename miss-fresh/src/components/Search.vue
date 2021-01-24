<template>
  <a-form-model
    class="searchFrom"
    layout="inline"
    :model="searchFrom"
    @submit="handleSubmit"
    @submit.native.prevent
  >
    <a-form-model-item label='检索关键字：'>
      <a-input v-model="searchFrom.keyword" placeholder="请输入关键字">
        <a-icon slot="prefix" type="keyword" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-model-item>
     <a-form-model-item  label='类目选择：'>
    <a-select
      class="dropSelect"
      show-search
      placeholder="请选择类目"
      style="width: 200px"
      @change="handleChange"
      allowClear
    >
      <a-select-option v-for="c in categoryList" :value="c.id" :key="c.id">
        {{ c.name }}
      </a-select-option>
    </a-select>
    </a-form-model-item>
    <a-form-model-item class="searchBth">
      <a-button type="primary" html-type="submit">
        搜索
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import api from '../api/category';

export default {
  created() {
    api.list().then((res) => {
      this.categoryList = res.data;
    });
  },
  data() {
    return {
      searchFrom: {
        keyword: '',
        category: '',
      },
      categoryList: [],
    };
  },
  methods: {
    // 搜索，提交表单的时候触发的函数
    handleSubmit() {
      this.$emit('searchClick', this.searchFrom);
    },
    // 改变类目时触发的函数
    handleChange(val) {
      this.searchFrom.category = val;
    },
  },
};
</script>

<style scoped lang="less">
.searchFrom{
  padding: 10px 30px;
  .dropSelect{
    padding: 4px 11px 4px 0px;
  }
  .searchBth{
    margin-left: 6px;
  }
}
</style>
