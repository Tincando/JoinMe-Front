<template>
  <div class="main hidden tr-1">
    <div class="container event text-start">
      <div class="flex row py-4">
        <div class="col">
          <div class="d-flex justify-content-center">
            <img class="concert rounded img-fluid shadow" :src="info.url" />
          </div>
        </div>
        <div class="col-7">
          <div class="container-fluid">
            <h2>{{ formatTime(info.eventDate) }}</h2>
            <h1>{{ info.title }}</h1>
            <p>{{ info.details }}</p>
            <p>{{ info.city }}</p>
            <p>{{ info.category }}</p>
            <p class="text-end">Posted {{ formatTime2(info.posted_at) }}</p>
            <div v-if="info.limit">
              <p class="text-end">
                Friends going: {{ info.people }}/{{ info.limit }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "dogadaj",
  props: ["info"],

  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  },

  methods: {
    formatTime(t) {
      return moment(t).format("MMM Do YY");
    },
    formatTime2(t) {
      return moment(t).calendar();
    },
  },
};
</script>

<style>
</style>