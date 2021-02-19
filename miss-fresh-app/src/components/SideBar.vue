<template>
  <div class="sidebar-wrapper" ref="sideBar">
    <div
      v-for="(item, i) in sideList"
      :key="item"
      :class="{ active: index === i }"
      @touchend="moveTo(i, $event)"
      @touchstart="move = false"
      @touchmove="move = true"
    >
      {{ i == 0 ? '全部': item }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import tools from '../utils/tools';

export default {
  data() {
    return {
      index: 0,
      move: false,
    };
  },
  computed: {
    ...mapState(['sideList']),
  },
  methods: {
    moveTo(i, e) {
      if (this.move) {
        return;
      }
      this.index = i;
      const { sideBar } = this.$refs;
      const wrapperTop = sideBar.getBoundingClientRect().top;
      const wrapperHeight = sideBar.offsetHeight;
      const itemTop = e.target.getBoundingClientRect().top;
      const itemHeight = e.target.offsetHeight;
      tools.moveTo(sideBar.scrollTop, -wrapperTop - wrapperHeight / 2 + itemTop + itemHeight / 2,
        sideBar, 'scrollTop');
      // 获取商品卡片信息
    },
  },
};
</script>

<style lang="less" scoped>
.sidebar-wrapper {
  position: fixed;
  left: 0px;
  top: 145px;
  bottom: 50px;
  width: 79px;
  overflow: auto;
  background-color: #f8f8f8;
  div {
    width: 79px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    position: relative;
  }
  .active {
    font-weight: bold;
    color: #ff1a90;
  }
  .active::before {
    content: "";
    width: 6px;
    height: 18px;
    background-color: #ff1a90;
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
  }
  &::-webkit-scrollbar{
      width: 0px;
      background: none;
  }
}</style
>>
