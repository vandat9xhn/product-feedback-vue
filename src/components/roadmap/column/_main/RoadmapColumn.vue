<template>
  <div class="RoadmapColumn">
    <div class="RoadmapColumn_header">
      <div class="RoadmapColumn_header_title">
        {{ title }} ({{ arr_feedback.length }})
      </div>

      <div class="RoadmapColumn_header_des">
        {{ description }}
      </div>
    </div>

    <ul>
      <li
        v-for="(item, index) in arr_feedback"
        :key="index"
        class="RoadmapColumn_item"
      >
        <FeedbackItem
          :id="item.id"
          :count_vote="item.count_vote"
          :count_comment="item.count_comment"
          :title="item.title"
          :detail="item.detail"
          :category="item.category"
          :status="item.status"
          :color="item.color"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import FeedbackItem from '@/components/feedback_item/FeedbackItem.vue';
import { Feedback, getAPropsRequired } from '@/types';
import { defineComponent } from 'vue';

//
export const RoadmapColumnProps = {
  arr_feedback: getAPropsRequired<Feedback[]>(Array),
  title: getAPropsRequired<string>(String),
  description: getAPropsRequired<string>(String),
};

//
export default defineComponent({
  name: 'RoadmapColumn',
  components: { FeedbackItem },
  props: RoadmapColumnProps,

  // setup(props) {},
  //data() {
  //return {};
  //},
});
</script>

<style lang="scss" src="./RoadmapColumn.scss"></style>
