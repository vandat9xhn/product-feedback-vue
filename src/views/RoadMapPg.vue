<template>
  <div class="RoadMapPg">
    <Roadmap />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Roadmap from '@/components/roadmap/_main/Roadmap.vue';

export default defineComponent({
  name: 'RoadMapPg',
  components: { Roadmap },
  // props: {},

  // setup(props) {},
  //data() {
  //return {};
  //},
});
</script>

<!-- <style lang="scss" src="./RoadMapPg.scss"></style> -->
