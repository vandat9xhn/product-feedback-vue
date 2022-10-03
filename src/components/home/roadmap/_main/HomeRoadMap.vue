<template>
  <div class="HomeRoadMap box-shadow-elm">
    <div class="HomeRoadMap_header flex space-between">
      <div class="HomeRoadMap_title">Roadmap</div>

      <div>
        <router-link class="HomeRoadMap_link" to="/roadmap"> View </router-link>
      </div>
    </div>

    <div>
      <ul>
        <li
          v-for="(item, index) in statuses"
          :key="index"
          class="HomeRoadMap_status"
        >
          <HomeRoadMapStatus
            :status="item.status"
            :count="item.count"
            :color="item.color"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeRoadMapStatus from '../item/HomeRoadMapStatus.vue';

export default defineComponent({
  name: 'HomeRoadMap',
  components: { HomeRoadMapStatus },
  // props: {},

  // setup(props) {},
  data() {
    return {
      statuses: [
        { status: 'Planed', count: 1, color: '#f49f85' },
        { status: 'In-Progress', count: 2, color: '#ad1fea' },
        { status: 'Live', count: 0, color: '#62bcfa' },
      ],
    };
  },
});
</script>

<style lang="scss" src="./HomeRoadMap.scss"></style>
