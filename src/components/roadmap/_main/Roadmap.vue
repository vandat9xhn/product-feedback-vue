<template>
  <div class="Roadmap">
    <div class="Roadmap_bar">
      <RoadmapBar />
    </div>

    <ul class="flex space-between">
      <li
        v-for="(item, index) in arr_column"
        :key="item.title"
        class="Roadmap_col"
      >
        <RoadmapColumn v-bind="item" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { DEFAULT_SUGGESTION } from '@/default/suggestion';
import { Feedback } from '@/types';
import { defineComponent } from 'vue';
import RoadmapColumn from '../column/_main/RoadmapColumn.vue';
import RoadmapBar from '../column/bar/RoadmapBar.vue';

interface Column {
  arr_feedback: Feedback[];
  title: string;
  description: string;
}

export default defineComponent({
  name: 'Roadmap',
  components: { RoadmapColumn, RoadmapBar },
  // props: {},

  // setup(props) {},
  data() {
    return {
      arr_column: [
        {
          title: 'Planned',
          description: 'Ideas prioritized for research',
          arr_feedback: [],
        },
        {
          title: 'In-Progress',
          description: 'Currently being developed',
          arr_feedback: [],
        },
        {
          title: 'Live',
          description: 'Released features',
          arr_feedback: [],
        },
      ] as Column[],
    };
  },

  mounted() {
    const arr = DEFAULT_SUGGESTION;
    const new_arr_column = [...this.arr_column];
    arr.forEach((item) => {
      for (let i = 0; i < 3; i++) {
        if (item.status === new_arr_column[i].title) {
          new_arr_column[i].arr_feedback.push(item);
          return;
        }
      }
    });

    this.arr_column = new_arr_column;
  },
});
</script>

<style lang="scss" src="./Roadmap.scss"></style>
