<template>
  <Home />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Home from '@/components/home/_main/Home.vue';

export default defineComponent({
  name: 'HomePg',
  components: { Home },
  props: {},
  data() {
    return {};
  },
});
</script>
