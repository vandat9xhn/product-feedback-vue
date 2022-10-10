<template>
  <div class="RoadmapBar" :class="bool ? 'display-none' : ''">
    <div class="flex space-between items-center">
      <div class="RoadmapBar_left">
        <div class="RoadmapBar_back" @click="handleBack">{{ '<' }} Go Back</div>

        <div class="RoadmapBar_title">Roadmap</div>
      </div>

      <button type="button" class="RoadmapBar_btn" @click="toggleBool">
        + Add Feedback
      </button>
    </div>
  </div>

  <div v-if="bool">
    <ModalAddFeedback
      :closeModal="toggleBool"
      :handleAddFeedback="handleAddFeedback"
    />
  </div>
</template>

<script lang="ts">
import ModalAddFeedback from '@/components/modals/add_feedback/ModalAddFeedback.vue';
import { useBool } from '@/hooks/useBool';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RoadmapBar',
  components: { ModalAddFeedback },
  // props: {},

  setup(props) {
    const { bool, toggleBool } = useBool(false);

    return {
      bool,
      toggleBool,
    };
  },
  data() {
    return {};
  },

  methods: {
    handleAddFeedback(...params: any[]) {
      console.log(params);
    },
    handleBack() {
      history.back();
    },
  },
});
</script>

<style lang="scss" src="./RoadmapBar.scss"></style>
