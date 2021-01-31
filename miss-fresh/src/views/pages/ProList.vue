<template>
  <div class="prolist">
    <!-- 搜索列表 -->
    <search-list
      :categoryList="categoryList"
      @searchClick="handleClick"
    />
    <!-- 商品列表 -->
    <pro-table
      :data="tableData"
      :pagination="pagination"
      @pageNum="changePage"
      @proEdit="proEdit"
      @proDelect="proDelect"
    />
    <a-button class="proadd" type="primary" html-type="submit">
      <router-link :to="{ name: 'Proadd' }">添加商品</router-link>
    </a-button>
  </div>
</template>

<script>
import SearchList from '../../components/Search.vue';
import ProTable from '../../components/ProTable.vue';
import apiProduct from '../../api/production';
import apiSearch from '../../api/category';

export default {
  components: {
    SearchList,
    ProTable,
  },
  data() {
    return {
      searchFrom: {},
      tableData: [],
      pagination: {
        current: 1,
        pageSize: 10,
        total: 67,
        showSizeChanger: true,
      },
      categoryList: [],
      // 映射关系表
      categoryMap: {},
    };
  },
  async created() {
    await apiSearch.list().then((res) => {
      this.categoryList = res.data;
      res.data.forEach((item) => {
        this.categoryMap[item.id] = item;
      });
    });
    this.getProTable();
  },
  methods: {
    // 点击搜索按钮触发的函数
    handleClick(val) {
      this.searchFrom = val;
      this.getProTable();
    },
    // 获取商品列表数据的函数
    getProTable() {
      apiProduct
        .table({
          page: this.pagination.current,
          size: this.pagination.pageSize,
          ...this.searchFrom,
        })
        .then((res) => {
          this.tableData = res.data.map((item) => ({
            ...item,
            key: item.id,
            categoryName: this.categoryMap[item.category].name,
          }));
        });
    },
    // 改变页码并重新渲染内容
    changePage(e) {
      this.pagination = e;
      this.getProTable();
    },
    // 编辑和删除按钮的功能
    proEdit(record) {
      this.$router.push({
        name: 'Proedit',
        params: {
          id: record.id,
        },
      });
    },
    proDelect(record) {
      this.$confirm({
        title: '确认删除',
        content: <div style="color:red">{`确认删除商品标题为：${record.title}的商品吗？`}</div>,
        onOk: () => {
          apiProduct.remove({
            id: record.id,
          }).then(() => {
            this.getProTable();
            this.$message.success('删除成功！');
          });
        },
        onCancel: () => {
          console.log('cancel');
        },
        class: 'confim-box',
      });
    },
  },
};
</script>

<style scoped lang="less">
.prolist {
  position: relative;
  .proadd {
    position: absolute;
    right: 30px;
    top: 13px;
  }
}
</style>
