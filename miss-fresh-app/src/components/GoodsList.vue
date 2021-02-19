<template>
  <div class="list-wrapper">
    <div class="list-header van-hairline--top-bottom">
      <div :class="{ active: type == 'all' }">综合</div>
      <div :class="{ active: type == 'sale' }">销量</div>
      <div
        class="price"
        :class="{ 'price-up': type == 'price-up', 'price-down': type == 'price-down' }"
      >
        价格
      </div>
    </div>
    <div class="list-content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'price-up',
    };
  },
};
</script>

<style lang="less" scoped>
.list-header {
  width: 296px;
  position: relative;
  top: 0;
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
  .price::before{
      content: '';
      border: 4px solid transparent;
      border-bottom-color:#aaa;
      position: absolute;
      top: 4px;
      right: 0;
  }
  .price::after{
      content: '';
      border: 4px solid transparent;
      border-top-color:#aaa;
      position: absolute;
      bottom: 4px;
      right: 0;
  }
  .price-up::before{
      border-bottom-color:#ff1a90;
  }
  .price-down::after{
      border-top-color:#ff1a90;
  }
}
</style>
