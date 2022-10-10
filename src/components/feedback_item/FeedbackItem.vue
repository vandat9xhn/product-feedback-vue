<template>
  <div class="FeedbackItem pos-rel">
    <div
      class="FeedbackItem_border_top"
      :style="{ backgroundColor: color }"
    ></div>

    <router-link
      class="FeedbackItem_link display-block pos-abs-100per"
      :to="'/detail/' + id"
    ></router-link>

    <div class="flex items-center">
      <div class="FeedbackItem_ball" :style="{ backgroundColor: color }"></div>

      <div class="FeedbackItem_status">
        {{ status }}
      </div>
    </div>

    <div class="FeedbackItem_title">
      {{ title }}
    </div>

    <div class="FeedbackItem_detail">
      {{ detail }}
    </div>

    <div class="FeedbackItem_category flex">
      <div class="FeedbackItem_category_contain">
        {{ category }}
      </div>
    </div>

    <div class="flex space-between">
      <div class="FeedbackItem_vote flex items-center">
        <IconArrowUp :width="12" :height="12" />

        <div class="FeedbackItem_count_vote">
          {{ count_vote }}
        </div>
      </div>

      <div class="flex items-center">
        <IconComment :width="18" :height="18" />

        <div class="FeedbackItem_count_comment">
          {{ count_comment }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getAPropsRequired } from '@/types';
import { defineComponent } from 'vue';
import IconArrowUp from '@/icons/arrow_up/IconArrowUp.vue';
import IconComment from '@/icons/comment/IconComment.vue';

//
export const FeedbackItemProps = {
  id: getAPropsRequired<number>(Number),
  count_vote: getAPropsRequired<number>(Number),
  count_comment: getAPropsRequired<number>(Number),

  title: getAPropsRequired<string>(String),
  detail: getAPropsRequired<string>(String),
  category: getAPropsRequired<string>(String),
  status: getAPropsRequired<string>(String),
  color: getAPropsRequired<string>(String),
};

//
export default defineComponent({
  name: 'FeedbackItem',
  components: { IconArrowUp, IconComment },
  props: FeedbackItemProps,

  // setup(props) {},
  //data() {
  //return {};
  //},
});
</script>

<style lang="scss" src="./FeedbackItem.scss"></style>
