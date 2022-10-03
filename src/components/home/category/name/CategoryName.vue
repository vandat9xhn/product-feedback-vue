<template>
  <button type="button" :class="class" @click="onClick">
    {{ name }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { filterSuggestTypeProps } from '@/types';

export default defineComponent({
  name: 'CategoryName',
  components: {},
  props: {
    name: {
      type: String,
      required: true,
    },
    filterSuggest: {
      type: filterSuggestTypeProps,
      required: true,
    },
  },

  // setup(props) {},
  data() {
    return {
      class: `CategoryName ${this.name === 'All' ? 'CategoryName-all' : ''}`,
    };
  },

  methods: {
    onClick() {
      this.filterSuggest(this.name);
    },
  },
});
</script>

<style lang="scss" src="./CategoryName.scss"></style>
