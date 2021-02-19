<template>
  <div class="one-bar-wrapper" ref="oneTab">
    <div
      class="one-bar-item"
      v-for="(item, i) in menuList"
      :key="item.title"
      :class="{ active: index === i }"
      @touchend="scrollTo(i, $event)"
      @touchstart="move = false"
      @touchmove="move = true"
    >
      <div class="img-wrapper">
        <img :src="item.imgURL" />
      </div>
      <div class="item-title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import tools from '../utils/tools';

export default {
  data() {
    return {
      index: 0,
      move: false,
      menuList: [
        {
          title: '时令水果',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg',
        },
        {
          title: '酒水冲调',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/酒水冲调.jpg',
        },
        {
          title: '安心乳品',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/安心乳品.jpg',
        },
        {
          title: '休闲零食',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/休闲零食.jpg',
        },
        {
          title: '肉蛋食材',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/肉蛋食材.jpg',
        },
        {
          title: '熟食餐饮',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/熟食餐饮.jpg',
        },
        {
          title: '海鲜水产',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/海鲜水产.jpg',
        },
        {
          title: '粮油调味',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/粮油调味.jpg',
        },
        {
          title: '某手美食',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/某手美食.jpg',
        },
        {
          title: '个人护理',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/个人护理.jpg',
        },
        {
          title: '美妆护肤',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/美妆护肤.jpg',
        },
        {
          title: '家用电器',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家用电器.jpg',
        },
        {
          title: '3C数码',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/3C数码.jpg',
        },
        {
          title: '鲜花绿植',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/鲜花绿植.jpg',
        },
        {
          title: '宠物用品',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/宠物用品.jpg',
        },
        {
          title: '手表配饰',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg',
        },
      ],
    };
  },
  methods: {
    ...mapActions(['getSlideList']),
    scrollTo(i, e) {
      if (this.move) {
        return;
      }
      this.index = i;
      // 计算移动的距离根据总结的规律
      const { oneTab } = this.$refs;
      const itemWidth = e.target.offsetWidth;
      const itemLeft = e.target.getBoundingClientRect().left;
      const wrapperWidth = oneTab.offsetWidth;
      // 给滚动条的移动添加动画，使之平滑过渡
      tools.moveTo(oneTab.scrollLeft, itemWidth / 2 + itemLeft - wrapperWidth / 2,
        oneTab, 'scrollLeft');
      // 获取侧边栏数据
      this.getSlideList(this.menuList[i].title);
    },
  },
  mounted() {
    this.getSlideList(this.menuList[0].title);
  },
};
</script>

<style lang="less" scoped>
.one-bar-wrapper {
  width: 375px;
  height: 104px;
  display: flex;
  overflow: auto;
  .one-bar-item {
    width: 50px;
    height: 70px;
    padding: 10px 5px;
    .img-wrapper {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-content: center;
      border: 2px solid #fff;
      background-color: #fff;
      border-radius: 46px;
      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        align-self: center;
      }
    }
    .item-title {
      text-align: center;
      font-size: 12px;
      margin-top: 5px;
    }
  }
  .active {
    .img-wrapper {
      border: 2px solid #d13e93;
    }
    .item-title {
      color: #fff;
      background-color: #d13193;
      font-weight: bold;
      border-radius: 30px;
    }
  }
}
.one-bar-wrapper::-webkit-scrollbar {
  width: 0;
  background: none;
}
</style>
