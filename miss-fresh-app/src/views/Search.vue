<template>
  <div class="search-wrapper">
    <div class="search-head">
      <van-icon name="arrow-left" class="arr-left" @touchend="back"/>
      <van-search
        class="search-content"
        v-model="value"
        show-action
        :placeholder="place"
        @search="onSearch"
        @input="changeContent"
        @focus="focusHeader"
        autofocus
      >
      <template #action v-if="showList">
          <div @click="onSearch(value)">搜索</div>
        </template>
         <template #action v-else>
          <router-link tag="div" class="shop-car" id="shop-car" to="/home/shopping">
            <van-icon name="shopping-cart-o" :badge="badge"/>
          </router-link>
        </template>
        </van-search>
    </div>
    <div class="like-search" v-if="likeList.length && showList">
      <van-list>
        <van-cell v-for="item in likeList" :key="item" :title="item" @click="onSearch(item)" >
          <template #title>
            <span class="custom-title" v-html="formatHTML(item)"></span>
          </template>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: this.place,
      place: '酒',
      likeList: [],
      timer: null,
    };
  },
  methods: {
    // 防抖
    async changeContent() {
      if (this.value === '') {
        this.likeList = [];
        return;
      }
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      } else {
        this.timer = setTimeout(async () => {
          const res = await this.$api.likeSearch(this.value);
          this.likeList = res.result;
          clearTimeout(this.timer);
          this.timer = null;
        }, 300);
      }
    },
    onSearch(value) {
      if (value === '') {
        this.value = this.place;
      } else {
        this.value = value;
      }
      this.likeList = [];
    },
    focusHeader() {},
    back() {

    },
  },
};
</script>

<style lang="less" scoped>
.search-wrapper {
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: #fff;
  .search-head {
    width: 345px;
    background-color: #fff;
    margin: 0 auto;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    .arr-left {
      font-size: 22px;
    }
    .search-content {
      flex: 1;
    }
  }
  .like-search {
    position: relative;
    top: 50px;
    width: 100%;
    box-sizing: border-box;
    padding-left: 30px;
  }
}
</style>
