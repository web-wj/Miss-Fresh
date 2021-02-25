<template>
  <div class="list-wrapper">
    <div class="list-header van-hairline--top-bottom">
      <div :class="{ active: type == 'all' }" @click="changeType('all')">综合</div>
      <div :class="{ active: type == 'sale' }" @click="changeType('sale')">销量</div>
      <div
        class="price"
        :class="{ 'price-up': type == 'price-up', 'price-down': type == 'price-down' }"
        @click="changeType('price')"
      >
        价格
      </div>
    </div>
    <div class="list-content">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :immediate-check="false"
        >
          <goods-card
            v-for="item in goodsList"
            :key="item.id"
            v-bind="item"
            :num='counterMap[item.id]'
          ></goods-card>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import goodsCard from './GoodsCard.vue';

export default {
  components: {
    goodsCard,
  },
  data() {
    return {
      type: 'price-up',
      isLoading: false,
      loading: false,
      finished: false,
      page: 1,
    };
  },
<<<<<<< HEAD
  methods: {
=======
  computed: {
    ...mapState(['goodsList', 'counterMap']),
  },
  methods: {
    ...mapMutations(['resetGoodsList']),
    ...mapActions(['getGoodsList']),
    async onLoad() {
      this.loading = true;
      this.page += 1;
      const result = await this.getGoodsList({ page: this.page, sortType: this.type });
      if (result) {
        this.loading = false;
      } else {
        this.finished = true;
      }
    },
    // 下拉刷新
    onRefresh() {
      this.isLoading = true;
      this.loading = false;
      this.finished = false;
      this.page = 1;
      this.resetGoodsList();
      this.getGoodsList({ page: 1, sortType: this.type });
      this.isLoading = false;
    },
>>>>>>> 12.搜索页面
    changeType(type) {
      if (type === 'all') {
        this.type = 'all';
      } else if (type === 'sale') {
        this.type = 'sale';
      } else if (this.type === 'price-up') {
        this.type = 'price-down';
      } else {
        this.type = 'price-up';
      }
<<<<<<< HEAD
=======
      this.onRefresh();
>>>>>>> 12.搜索页面
    },
  },
};
</script>

<style lang="less" scoped>
.list-header {
  width: 296px;
  position: relative;
  top: -12px;
  left: 79px;
  box-sizing: border-box;
  padding: 0px 8px;
  display: flex;
  justify-content: flex-end;
  > div {
    width: 50px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    color: #cecece;
    position: relative;
  }
  .active,
  .price-up,
  .price-down {
    color: #ff1a90;
    font-weight: bold;
  }
  .price::before {
    content: "";
    border: 4px solid transparent;
    border-bottom-color: #aaa;
    position: absolute;
    top: 4px;
    right: 0;
  }
  .price::after {
    content: "";
    border: 4px solid transparent;
    border-top-color: #aaa;
    position: absolute;
    bottom: 4px;
    right: 0;
  }
  .price-up::before {
    border-bottom-color: #ff1a90;
  }
  .price-down::after {
    border-top-color: #ff1a90;
  }
}
.list-content {
  width: 296px;
  position: fixed;
  top: 175px;
  right: 0;
  bottom: 50px;
  overflow: auto;
}
.van-pull-refresh{
  overflow:unset !important;
}
</style>
