<template>
  <div class="HomeBar">
    <div class="flex space-between items-center">
      <div class="HomeBar_left flex items-center">
        <div class="HomeBar_icon">
          <IconSuggest />
        </div>

        <div class="HomeBar_title">{{ count }} Suggestions</div>

        <div>
          <HomeSort :sort_value="sort_value" :sortSuggest="sortSuggest" />
        </div>
      </div>

      <button type="button" class="HomeBar_btn" @click="openModalAddFeedback">
        + Add Feedback
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import IconSuggest from '@/icons/suggest/IconSuggest.vue';
import { sortSuggestTypeProps, VoidFunction } from '@/types';
import { defineComponent } from 'vue';
import HomeSort from '../sort/HomeSort.vue';

export default defineComponent({
  name: 'HomeBar',
  components: { IconSuggest, HomeSort },
  props: {
    count: Number,
    openModalAddFeedback: VoidFunction,
    sort_value: String,
    sortSuggest: {
      type: sortSuggestTypeProps,
      required: true,
    },
  },

  // setup(props) {},
  //data() {
  //return {};
  //},
});
</script>

<style lang="scss" src="./HomeBar.scss"></style>
