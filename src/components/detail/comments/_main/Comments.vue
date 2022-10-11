<template>
  <div class="Comments">
    <div class="Comments_title">
      {{ comments.length }} Comment{{ comments.length >= 2 ? 's' : '' }}
    </div>

    <div>
      <ul>
        <li v-for="(comment, ix_cmt) in comments" :key="comment.id">
          <div v-if="ix_cmt !== 0" class="Comments_cmt_hr"></div>

          <div>
            <CmtSub
              :id_cmt_sub="comment.id"
              :picture="comment.user.picture"
              :name="comment.user.name"
              :username="comment.user.username"
              :content="comment.content"
              :postReply="postReplyCmt"
            />
          </div>

          <ul class="Comments_subs">
            <li v-for="sub in comment.subs" :key="sub.id" class="Comments_sub">
              <CmtSub
                :id_cmt_sub="sub.id"
                :picture="sub.user.picture"
                :name="sub.user.name"
                :username="sub.user.username"
                :content="sub.content"
                :postReply="postReplySub"
              />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Comment, getAPropsRequired, postReplyTypeProps } from '@/types';
import { defineComponent } from 'vue';
import CmtSub from '@/components/cmt_sub/_main/CmtSub.vue';

export default defineComponent({
  name: 'Comments',
  components: { CmtSub },
  props: {
    comments: getAPropsRequired<Comment[]>(Array),
    postReplyCmt: postReplyTypeProps,
    postReplySub: postReplyTypeProps,
  },

  // setup(props) {},
  //data() {
  //return {};
  //},
});
</script>

<style lang="scss" src="./Comments.scss"></style>
