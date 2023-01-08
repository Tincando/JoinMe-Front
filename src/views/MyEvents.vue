<template>
  <div class="main">
    <div class="spacer curve2"></div>
    <h1 class="text-start pb-3 px-5 mt-min3">My events:</h1>
    <hr />
    <div :key="event.eventDate" v-for="event in events">
      <dogadaj :info="event" />
    </div>
  </div>
</template>

<script>
import { Events } from "@/services";
import dogadaj from "@/components/dogadaj.vue";

export default {
  data() {
    return {
      events: [],
      user: JSON.parse(localStorage.getItem("user")).username,
    };
  },
  async mounted() {
    this.events = await Events.Myevents(this.user);
  },
  name: "my-events",
  components: {
    dogadaj,
  },
  methods: {
    formatTime(t) {
      return moment(t).format("MMMM Do YYYY, h:mm:ss a");
    },
    formatTime2(t) {
      return moment(t).calendar();
    },
  },
};
</script>

<style>
</style>