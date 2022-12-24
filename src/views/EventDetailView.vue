<template>
  <div v-if="event">
    <div class="spacer curve2"></div>
    <div class="container-fluid mt-min3">
      <div class="title d-flex justify-content-start">
        <h1 class="fw-bold text-uppercase">{{ event.title }}</h1>
      </div>
      <div class="subtitle d-flex justify-content-start">
        <p>Created by:</p>
        <p class="fw-bold">{{ event.email }}</p>
      </div>
      <hr class="pb-5" />
      <section class="container-fluid bg-light p-5">
        <div class="row">
          <div class="col-sm-8">
            <div class="container">
              <img class="img" :src="event.url" />
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
          <div class="col-4">
            <div class="container-sm bg-white border">
              <p>{{ event.category }}</p>
              <p>{{ event.posted_at }}</p>
            </div>
          </div>
        </div>
      </section>
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