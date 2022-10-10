<template>
  <div class="HomeSuggestList">
    <ul>
      <li
        v-for="(item, index) in arr_suggest"
        :key="item.id"
        class="HomeSuggestList_item"
      >
        <HomeSuggestItem
          :id="item.id"
          :count_vote="item.count_vote"
          :count_comment="item.count_comment"
          :title="item.title"
          :detail="item.detail"
          :category="item.category"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Suggestion } from '@/types';
import { defineComponent, PropType } from 'vue';
import HomeSuggestItem from '../item/HomeSuggestItem.vue';

export default defineComponent({
  name: 'HomeSuggestList',
  components: { HomeSuggestItem },
  props: {
    arr_suggest: Array as PropType<Suggestion[]>,
  },

  // setup(props) {},
  //data() {
  //return {};
  //},
});
</script>

<style lang="scss" src="./HomeSuggestList.scss"></style>
