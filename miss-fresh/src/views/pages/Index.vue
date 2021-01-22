<template>
  <div class="index">
    <card />
    <line-charts />
  </div>
</template>

<script>
import Card from '../../components/Card.vue';
import LineCharts from '../../components/LineCharts.vue';

export default {
  components: {
    Card,
    LineCharts,
  },
};
</script>
