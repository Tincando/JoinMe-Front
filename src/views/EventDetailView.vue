<template>
  <div v-if="event">
    <div class="container">
      <img :src="event.url" />
    </div>
    <div class="container-md">
      <h1>Details</h1>
      <p>{{ event.title }}</p>
      <div v-if="event.limit">
        <p>Friends going: {{ event.people }}/{{ event.limit }}</p>

        <button class="btn btn-primary" @click="pat">Im going</button>
      </div>
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
  methods: {
    async pat() {
      if (this.event.people < this.event.limit) {
        let doc = {
          _id: this.event.id,
          people: this.event.people + 1,
        };
        let newpost = await Events.up(doc);
        console.log("Spremljeni post", newpost.data);
        this.$router.push({ name: "events" });
      } else {
        alert("Group is full, I'm sorry");
      }
    },
  },
};
</script>

<style>
</style>