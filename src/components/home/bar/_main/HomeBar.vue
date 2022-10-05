<template>
  <div class="HomeBar" :class="show_add_modal ? 'display-none' : ''">
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

  <div v-if="show_add_modal">
    <ModalAddFeedback
      :closeModal="closeModal"
      :handleAddFeedback="handleAddFeedback"
    />
  </div>
</template>

<script lang="ts">
import IconSuggest from '@/icons/suggest/IconSuggest.vue';
import { sortSuggestTypeProps, VoidFunction } from '@/types';
import { defineComponent } from 'vue';
import HomeSort from '../sort/HomeSort.vue';
import ModalAddFeedback from '@/components/modals/add_feedback/ModalAddFeedback.vue';

export default defineComponent({
  name: 'HomeBar',
  components: { IconSuggest, HomeSort, ModalAddFeedback },
  props: {
    count: Number,
    sort_value: String,
    sortSuggest: {
      type: sortSuggestTypeProps,
      required: true,
    },
  },

  // setup(props) {},
  data() {
    return {
      show_add_modal: false,
    };
  },

  methods: {
    closeModal() {
      this.show_add_modal = false;
    },
    openModalAddFeedback() {
      this.show_add_modal = true;
    },
    handleAddFeedback(...params: any[]) {
      console.log(params);
    },
  },
});
</script>

<style lang="scss" src="./HomeBar.scss"></style>
