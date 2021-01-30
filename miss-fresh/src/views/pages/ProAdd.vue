<template>
  <div class="wrapper">
    <div class="steps">
      <a-steps :current="current">
        <a-step v-for="item in steps" :key="item.title" :title="item.title" />
      </a-steps>
    </div>
    <div class="steps-content">
      <add-basic v-if="current === 0" />
      <add-show v-else />
    </div>
    <a-button v-if="current < steps.length - 1" type="primary" @click="next">
      下一步
    </a-button>
    <div class="content"></div>
  </div>
</template>
<script>
import AddBasic from '../../components/AddBasic.vue';
import AddShow from '../../components/AddShow.vue';

export default {
  components: {
    AddBasic,
    AddShow,
  },
  data() {
    return {
      current: 0,
      steps: [
        {
          title: '填写商品基本信息',
        },
        {
          title: '填写商品销售信息',
        },
      ],
    };
  },
  methods: {
    next() {
      this.current += 1;
    },
    prev() {
      this.current -= 1;
    },
  },
};
</script>
<style scoped>
.steps {
  margin: 0 auto 10px;
  padding: 10px 300px;
  border-bottom: 1px solid #eee;
}
.steps-content {
  background-color: #fcfcfc;
  margin: 10px;
  padding: 20px;
  max-width: 80%;
  position: relative;
  left: 660px;
  transform: translateX(-50%);
}
</style>
