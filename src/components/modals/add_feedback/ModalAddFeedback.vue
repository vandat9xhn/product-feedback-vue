<template>
  <Modal :close-modal="closeModal">
    <div class="ModalAddFeedback pos-rel h-100per">
      <div class="ModalAddFeedback_plus flex-center">+</div>

      <div class="ModalAddFeedback_contain modal_contain">
        <h2 class="modal_heading">Create New Feedback</h2>

        <div class="modal_part">
          <div class="modal_label">Feedback Title</div>

          <div class="modal_des">Add a short, descriptive headline</div>

          <div>
            <input ref="title" class="modal_ip" type="text" />
          </div>
        </div>

        <div class="modal_part">
          <div class="modal_label">Category</div>

          <div class="modal_des">Choose a category for your feedback</div>

          <div>
            <select ref="name" class="modal_ip">
              <option
                v-for="(item, index) in names"
                :key="item"
                class="modal_option"
              >
                {{ item }}
              </option>
            </select>
          </div>
        </div>

        <div class="modal_part">
          <div class="modal_label">Feedback Detail</div>

          <div class="modal_des">
            Include any specific comments on what should be improved, added,
            etc.
          </div>

          <div>
            <textarea ref="detail" class="modal_ip" rows="3" />
          </div>
        </div>

        <div class="flex justify-end">
          <button
            class="ModalAddFeedback_cancel modal_btn"
            type="button"
            @click="closeModal"
          >
            Cancel
          </button>

          <button
            class="ModalAddFeedback_add modal_btn"
            type="button"
            @click="onAddFeedback"
          >
            Add Feedback
          </button>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import { ARR_CATEGORY } from '@/data/suggestion';
import { handleAddFeedbackTypeProps, VoidFunction } from '@/types';
import { defineComponent } from 'vue';
import Modal from '../_main/Modal.vue';

//
export default defineComponent({
  name: 'ModalAddFeedback',
  components: { Modal },
  props: {
    closeModal: VoidFunction,
    handleAddFeedback: {
      type: handleAddFeedbackTypeProps,
      required: true,
    },
  },

  // setup(props) {},
  data() {
    return {
      names: ARR_CATEGORY.slice(1),
    };
  },

  methods: {
    onAddFeedback() {
      const title = (this.$refs.title as HTMLInputElement).value;
      const detail = (this.$refs.detail as HTMLInputElement).value;
      const name = (this.$refs.name as HTMLSelectElement).value;

      if (!title || !detail || !name) {
        return;
      }

      this.closeModal && this.closeModal();

      this.handleAddFeedback({ title: title, detail: detail, name: name });
    },
  },
});
</script>

<style lang="scss" src="./ModalAddFeedback.scss"></style>
