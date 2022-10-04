<template>
  <div class="SuggestItem flex pos-rel">
    <router-link
      class="SuggestItem_link display-block pos-abs-100per"
      :to="'/detail/' + id"
    ></router-link>

    <div class="SuggestItem_left">
      <div class="SuggestItem_left_contain">
        <IconArrowUp :width="12" :height="12" />

        <div class="SuggestItem_count_vote">
          {{ count_vote }}
        </div>
      </div>
    </div>

    <div class="SuggestItem_center grow-1">
      <div class="SuggestItem_title">
        {{ title }}
      </div>

      <div class="SuggestItem_detail">
        {{ detail }}
      </div>

      <div class="SuggestItem_status flex">
        <div class="SuggestItem_status_contain">
          {{ status }}
        </div>
      </div>
    </div>

    <div class="flex items-center">
      <IconComment :width="18" :height="18" />

      <div class="SuggestItem_count_comment">
        {{ count_comment }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconArrowUp from '@/icons/arrow_up/IconArrowUp.vue';
import IconComment from '@/icons/comment/IconComment.vue';

export const SuggestItemProps = {
  id: Number,
  count_vote: Number,
  count_comment: Number,

  title: String,
  detail: String,
  status: String,
};

export default defineComponent({
  name: 'SuggestItem',
  components: { IconArrowUp, IconComment },
  props: SuggestItemProps,

  // setup(props) {},
  //data() {
  //return {};
  //},
});
</script>

<style lang="scss" src="./SuggestItem.scss"></style>
