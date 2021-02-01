<template>
  <div class="classify-wrapper">
    <div class="search-btn">
      <van-icon name="search" />
      <div>苹果特卖亿元一斤</div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang='less' scoped>
.classify-wrapper{
  width: 375px;
  .search-btn{
    width: 355px;
    height: 33px;
    margin: 11px auto;
    background-color: #eee;
    border-radius: 10px;
    font-size: 14px;
    color: #a1a1a1;
    text-align: center;
    line-height: 33px;
    >*{
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
