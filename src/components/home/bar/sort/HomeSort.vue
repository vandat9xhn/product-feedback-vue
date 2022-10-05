<template>
  <div class="HomeSort flex items-center">
    <div class="HomeSort_title" @click="toggleShow">
      Sort by: {{ sort_value }}
    </div>

    <div class="HomeSort_select" :class="show ? '' : 'display-none'">
      <div
        v-for="(item, index) in arr_sort"
        :key="index"
        class="HomeSort_item"
        :class="sort_value === item.title ? 'HomeSort_item-active' : ''"
        @click="handleChange(item.title)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ARR_SORT } from '@/data/suggestion';
import { sortSuggestTypeProps } from '@/types';
import { defineComponent } from 'vue';

//
export default defineComponent({
  name: 'HomeSort',
  components: {},
  props: {
    sort_value: String,
    sortSuggest: {
      type: sortSuggestTypeProps,
      required: true,
    },
  },

  // setup(props) {},
  data() {
    return {
      arr_sort: ARR_SORT,
      show: false,
    };
  },

  methods: {
    handleChange(title: string) {
      this.sortSuggest(title);
      this.toggleShow()
    },
    toggleShow() {
      this.show = !this.show;
    },
  },
});
</script>

<style lang="scss" src="./HomeSort.scss"></style>
