<template>
  <div v-if="event">
    <div class="container">
      <img :src="event.url" />
    </div>
    <div class="container-md">
      <h1>Details</h1>
      <p>{{ event.title }}</p>
      <p>Friends going: {{ event.people }}/{{ event.limit }}</p>
      <button class="btn btn-primary">Im going</button>
    </div>
  </div>
</template>

<script>
import dogadaj from "@/components/dogadaj.vue";
import store from "@/store.js";
import { Events } from "@/services";

export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  async mounted() {
    this.event = await Events.getOne(this.id);
  },
  name: "event-details",
  components: {
    dogadaj,
  },
};
</script>

<style>
</style>