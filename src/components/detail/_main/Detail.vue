<template>
  <div class="Detail">
    <div class="Detail_part flex items-center space-between">
      <div class="Detail_back" @click="handleBack">Go back</div>

      <button class="Detail_edit" type="button" @click="">Edit Feedback</button>
    </div>

    <div class="Detail_part">
      <SuggestItem
        :id="detail_obj.id"
        :count_vote="detail_obj.votes.length"
        :count_comment="detail_obj.comments.length"
        :title="detail_obj.title"
        :detail="detail_obj.detail"
        :category="detail_obj.category"
        :has_link="false"
      />
    </div>

    <div class="Detail_part">
      <Comments
        :comments="detail_obj.comments"
        :post-reply-cmt="postReplyCmt"
        :post-reply-sub="postReplySub"
      />
    </div>

    <div>
      <AddCmt :post-cmt="postCmt" />
    </div>
  </div>
</template>

<script lang="ts">
import SuggestItem from '@/components/suggest_item/SuggestItem.vue';
import { DEFAULT_DETAIL } from '@/default/suggestion';
import { FeedbackDetail, postCmtType } from '@/types';
import { defineComponent } from 'vue';
import AddCmt from '../add_cmt/AddCmt.vue';
import Comments from '../comments/_main/Comments.vue';

export default defineComponent({
  name: 'Detail',
  components: { SuggestItem, Comments, AddCmt },
  // props: {},

  // setup(props) {},
  data() {
    const detail_obj: FeedbackDetail = {
      id: 0,
      user: { id: 0, name: '', picture: '', username: '' },
      category: 'Bug',
      status: 'Planned',
      color: '',

      title: '',
      detail: '',
      comments: [],
      votes: [],
    };
    return { detail_obj: detail_obj };
  },

  methods: {
    postReplyCmt(...params: any[]) {
      console.log(params);
    },
    postReplySub(...params: any[]) {
      console.log(params);
    },
    handleBack() {
      history.back();
    },
    postCmt(params: Parameters<postCmtType>[0]) {
      console.log(params.content);
    },
  },

  mounted() {
    this.detail_obj = DEFAULT_DETAIL;
  },
});
</script>

<style lang="scss" src="./Detail.scss"></style>
