<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :pagination="pagination"
    @change="changePage"
  >
    <div slot="operation">
      <a-button>编辑</a-button>
      <a-button>删除</a-button>
    </div>
  </a-table>
</template>
<script>
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 80,
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    ellipsis: true,
    width: 200,
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
    ellipsis: true,
  },
  {
    title: '类目',
    dataIndex: 'categoryName',
    key: 'categoryName',
    ellipsis: true,
    width: 100,
  },
  {
    title: '预售价格',
    dataIndex: 'price',
    key: 'price',
    width: 100,
  },
  {
    title: '折扣价格',
    dataIndex: 'price_off',
    key: 'price_off',
    width: 100,
  },
  {
    title: '标签',
    dataIndex: 'tags',
    key: 'tags',
  },
  {
    title: '限制购买数量',
    dataIndex: 'inventory',
    key: 'inventory',
    width: 100,
  },
  {
    title: '上架状态',
    dataIndex: 'status',
    key: 'status',
    width: 100,
    customRender: (text) => (text === 1 ? '上架' : '下架'),
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    scopedSlots: { customRender: 'operation' },
  },
];

export default {
  props: ['data', 'pagination'],
  data() {
    return {
      columns,
    };
  },
  methods: {
    // 改变页码时触发的函数
    changePage(page) {
      this.$emit('pageNum', page);
    },
  },
};
</script>
