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

      <div class="Home_right">
        <div class="Home_part">
          <HomeBar
            :count="arr_suggest.length"
            :sort_value="sort_value"
            :sortSuggest="sortSuggest"
          />
        </div>

        <div>
          <HomeSuggestList :arr_suggest="arr_suggest" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { DEFAULT_SUGGESTION } from '@/default/suggestion';
import { Suggestion } from '@/types';
import HomeBar from '../bar/_main/HomeBar.vue';
import CategoryNames from '../category/names/CategoryNames.vue';
import HomeHeading from '../heading/HomeHeading.vue';
import HomeRoadMap from '../roadmap/_main/HomeRoadMap.vue';
import HomeSuggestList from '../suggest/list/HomeSuggestList.vue';
import { ARR_SORT, ARR_CATEGORY } from '@/data/suggestion';

//
export default defineComponent({
  name: 'Home',
  components: {
    HomeHeading,
    CategoryNames,
    HomeRoadMap,
    HomeBar,
    HomeSuggestList,
  },
  // props: {

  // },

  setup(props) {},
  data() {
    return {
      names: ARR_CATEGORY,
      arr_suggest: [] as Suggestion[],
      sort_value: ARR_SORT[0].title,
    };
  },

  mounted() {
    this.getDataSuggest();
  },

  methods: {
    async getDataSuggest() {
      const new_arr_suggest: Suggestion[] = DEFAULT_SUGGESTION;
      this.arr_suggest = new_arr_suggest;
    },

    filterSuggest(name: string) {
      console.log(name);
    },
    sortSuggest(_sort_value: string) {
      this.sort_value = _sort_value;
    },
  },
});
</script>

<style lang="scss" src="./Home.scss"></style>
