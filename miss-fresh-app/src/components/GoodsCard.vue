<template>
  <div class="card-wrapper van-hairline--bottom">
    <div class="card-img">
      <img :src="images[0]" ref="img"/>
    </div>
    <div class="card-content">
      <div class="title overflow-hidden">{{ title }}</div>
      <div class="desc overflow-hidden">{{ desc }}</div>
      <div class="tags">
        <div v-for="i in tags" :key="i">{{ i }}</div>
      </div>
      <div class="price">￥{{ price }}</div>
      <div class="counter">
        <div @touchend='counter(id,-1)' v-if="num">
          <img src="https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/rec.png" alt="-" />
        </div>
        <div class="num" v-if="num">{{ num }}</div>
        <div @touchend='counter(id,1)'>
          <img src="https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/add.png" alt="+" />
        </div>
      </div>
    </div>
  </div>
</template>
youyu

<script>
import { mapMutations } from 'vuex';
import Animate from '../tools/animate/index';

export default {
  props: ['images', 'tags', 'title', 'desc', 'price', 'id', 'num'],
  methods: {
    ...mapMutations(['storageChange']),
    counter(id, num) {
      this.storageChange({ id, value: num });
      if (num === -1) {
        return;
      }
      // 图片的位置
      const { top: imgTop, left: imgLeft } = this.$refs.img.getBoundingClientRect();
      // 图片的宽高
      const { offsetWidth: imgWidth, offsetHeight: imgHeight } = this.$refs.img;
      const shopCar = document.getElementById('shop-car');
      // 购物车的位置
      const { top: carTop, left: carLeft } = shopCar.getBoundingClientRect();
      // 购物车的宽高
      const { offsetWidth: carWidth, offsetHeight: carHeight } = shopCar;
      const endX = carLeft + carWidth / 2;
      const endY = carTop + carHeight / 2;
      Animate({
        startX: imgLeft,
        startY: imgTop,
        endX,
        endY,
        src: this.$refs.img.src,
        width: imgWidth,
        height: imgHeight,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.card-wrapper {
  width: 100%;
  display: flex;
  height: 100px;
  .card-img {
    width: 90px;
    margin-right: 20px;
    img {
      width: 90px;
      height: 90px;
    }
  }
  .card-content {
    flex: 1;
    position: relative;
    > div {
      width: 170px;
    }
    .title {
      font-size: 13px;
      color: #1a1a1a;
      margin-top: 5px;
    }
    .desc {
      font-size: 11px;
      color: #aaa;
      margin-top: 5px;
    }
    .tags {
      display: flex;
      margin-top: 4px;
      > div {
        font-size: 10px;
        color: #aaa;
        padding: 2px;
        border: 1px solid #aaa;
        border-radius: 3px;
        margin-right: 5px;
      }
    }
    .price {
      color: #ff1a90;
      font-size: 14px;
      font-weight: 600;
      margin-top: 4px;
    }
    .counter {
      position: absolute;
      bottom: 12px;
      right: 15px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      > div:not(.num) {
        width: 16px;
        height: 16px;
        img {
          width: 100%;
        }
      }
      .num {
        padding: 0 5px;
        height: 22px;
        line-height: 22px;
      }
    }
  }
}
.overflow-hidden {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
