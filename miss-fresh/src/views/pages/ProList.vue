<template>
  <div class="prolist">
    <!-- 搜索列表 -->
    <search-list @searchClick="handleClick"/>
    <!-- 商品列表 -->
    <pro-table />
  </div>
</template>

<script>
import SearchList from '../../components/Search.vue';
import ProTable from '../../components/ProTable.vue';

export default {
  components: {
    SearchList,
    ProTable,
  },
  methods: {
    handleClick(val) {
      console.log(val);
    },
  },
};
</script>
