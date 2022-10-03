<template>
  <div class="Home">
    <div class="Home_row flex">
      <div class="Home_left">
        <div class="Home_heading Home_part">
          <HomeHeading />
        </div>

        <div class="Home_part">
          <CategoryNames :names="names" :filterSuggest="filterSuggest" />
        </div>

        <div>
          <HomeRoadMap />
        </div>
      </div>

      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HomeHeading from '../heading/HomeHeading.vue';
import CategoryNames from '../category/names/CategoryNames.vue';
import HomeRoadMap from '../roadmap/_main/HomeRoadMap.vue';
// import { filterSuggestType } from '@/types';

export default defineComponent({
  name: 'Home',
  components: { HomeHeading, CategoryNames, HomeRoadMap },
  // props: {

  // },

  setup(props) {},
  data() {
    return {
      names: ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'],
    };
  },

  methods: {
    filterSuggest(name: string) {
      console.log(name);
    },
  },
});
</script>

<style lang="scss" src="./Home.scss"></style>
