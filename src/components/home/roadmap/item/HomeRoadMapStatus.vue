<template>
  <div class="HomeRoadMapStatus flex space-between items-center">
    <div class="HomeRoadMapStatus_ball" :style="{ color: color }"></div>

    <div class="HomeRoadMapStatus_title">
      {{ status }}
    </div>

    <div class="HomeRoadMapStatus_count">
      {{ count }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeRoadMapStatus',
  components: {},
  props: {
    status: String,
    count: Number,
    color: String,
  },

  // setup(props) {},
  //data() {
  //return {};
  //},
});
</script>

<style lang="scss" src="./HomeRoadMapStatus.scss"></style>
