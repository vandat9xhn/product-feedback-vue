<template>
  <teleport to="#app">
    <div class="Modal">
      <div class="Modal_bg pos-abs-100per" @click="closeModal"></div>

      <div class="pos-rel h-100per">
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { VoidFunction } from '@/types';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  components: {},
  props: {
    closeModal: VoidFunction,
  },

  // setup(props) {},
  //data() {
  //return {};
  //},
});
</script>

<style lang="scss" src="./Modal.scss"></style>
