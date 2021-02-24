<template>
  <div class="card-wrapper van-hairline--bottom">
    <div class="card-img">
      <img :src="images[0]"/>
    </div>
    <div class="card-content">
      <div class="title overflow-hidden">{{ title }}</div>
      <div class="desc overflow-hidden">{{ desc }}</div>
      <div class="tags">
          <div v-for="i in tags" :key="i">{{i}}</div>
        </div>
      <div class="price">￥{{ price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['images', 'tags', 'title', 'desc', 'price'],
};
</script>

<style lang="less" scoped>
.card-wrapper {
  width: 100%;
  display: flex;
  height: 100px;
  .card-img {
    width: 90px;
    margin-right:20px;
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
    .price{
        color: #ff1a90;
        font-size: 14px;
        font-weight: 600;
        margin-top:4px ;
    }
  }
}
.overflow-hidden {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
