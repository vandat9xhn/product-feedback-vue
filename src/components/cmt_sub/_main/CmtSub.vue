<template>
  <div class="CmtSub">
    <div class="flex">
      <img class="CmtSub_pic" :src="picture" alt="" width="40" height="40" />

      <div class="grow-1">
        <div class="flex space-between items-center">
          <div class="CmtSub_user">
            <div class="CmtSub_user_name">
              {{ name }}
            </div>

            <div class="CmtSub_username">@{{ username }}</div>
          </div>

          <div class="CmtSub_reply" @click="onToggleBool">Reply</div>
        </div>

        <div class="CmtSub_content">
          {{ content }}
        </div>

        <div v-show="bool" class="flex">
          <div class="grow-1">
            <textarea
              ref="textarea"
              class="w-100per modal_ip"
              rows="4"
            ></textarea>
          </div>

          <div class="CmtSub_post flex items-center">
            <button
              class="CmtSub_post_btn modal_btn-purple"
              type="button"
              @click="onPostReply"
            >
              Post Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useBool } from '@/hooks/useBool';
import { getAPropsRequired, postReplyTypeProps } from '@/types';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CmtSub',
  components: {},
  props: {
    id_cmt_sub: getAPropsRequired<number>(Number),
    picture: getAPropsRequired<string>(String),
    name: getAPropsRequired<string>(String),
    username: getAPropsRequired<string>(String),
    content: getAPropsRequired<string>(String),
    postReply: postReplyTypeProps,
  },

  setup(props) {
    const { bool, toggleBool } = useBool(false);

    return {
      bool,
      toggleBool,
    };
  },
  //data() {
  //return {};
  //},

  methods: {
    onPostReply() {
      const textarea = this.$refs.textarea as HTMLTextAreaElement;
      const content = textarea.value;
      this.postReply({
        username: this.username,
        id_cmt: this.id_cmt_sub,
        content: content,
      });
      textarea.value = '';
    },
    onToggleBool() {
      this.toggleBool();

      if (this.bool) {
        const textarea = this.$refs.textarea as HTMLTextAreaElement;

        setTimeout(() => {
          textarea.focus();
        }, 1);
      }
    },
  },
});
</script>

<style lang="scss" src="./CmtSub.scss"></style>
