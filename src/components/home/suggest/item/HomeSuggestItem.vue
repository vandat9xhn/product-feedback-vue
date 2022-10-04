<template>
  <SuggestItem v-bind="$props" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SuggestItem, {
  SuggestItemProps,
} from '@/components/suggest_item/SuggestItem.vue';

export default defineComponent({
  name: 'HomeSuggestItem',
  components: { SuggestItem },
  props: SuggestItemProps,

  // setup(props) {},
  //data() {
  //return {};
  //},
});
</script>

<style lang="scss" src="./HomeSuggestItem.scss"></style>
