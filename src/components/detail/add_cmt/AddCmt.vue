<template>
  <div class="AddCmt">
    <div class="AddCmt_title">Add Comment</div>

    <div class="AddCmt_content">
      <textarea ref="textarea" class="modal_ip w-100per" rows="6"></textarea>
    </div>

    <div class="flex space-between items-center">
      <div></div>

      <button class="modal_btn-purple" type="button" @click="onPostCmt">
        Post Comment
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { postCmtTypeProps } from '@/types';

export default defineComponent({
  name: 'AddCmt',
  components: {},
  props: { postCmt: postCmtTypeProps },

  // setup(props) {},
  //data() {
  //return {};
  //},

  methods: {
    onPostCmt() {
      this.postCmt({
        content: (this.$refs.textarea as HTMLTextAreaElement).value,
      });
    },
  },
});
</script>

<style lang="scss" src="./AddCmt.scss"></style>
