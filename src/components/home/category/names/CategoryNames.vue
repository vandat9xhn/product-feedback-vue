<template>
  <div class="CategoryNames box-shadow-elm">
    <ul class="CategoryNames_row flex flex-wrap">
      <li
        v-for="(item, ix) in names"
        :key="item"
        class="CategoryNames_item"
      >
        <CategoryName :name="item" :filterSuggest="filterSuggest" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CategoryName from '../name/CategoryName.vue';
import { ArrNamesType, filterSuggestTypeProps } from '@/types';

//
export default defineComponent({
  name: 'CategoryNames',
  components: { CategoryName },
  props: {
    names: {
      type: ArrNamesType,
      required: true,
    },
    filterSuggest: {
      type: filterSuggestTypeProps,
      required: true,
    },
  },

  // setup(props) {},
  // data() {
  //   return {};
  // },
});
</script>

<style lang="scss" src="./CategoryNames.scss"></style>
