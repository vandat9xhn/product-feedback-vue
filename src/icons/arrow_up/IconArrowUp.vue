<template>
  <svg
    class="IconArrowUp"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 11 7"
    :width="width"
    :height="height"
  >
    <path d="m1.334 6 4-4 4 4" stroke="#4661E6" stroke-width="2"></path>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconArrowUp',
  props: {
    width: Number,
    height: Number,
  },
});
</script>
