<template>
  <div class="main">
    <div class="container event text-start">
      <div class="flex row py-4">
        <div class="col">
          <div class="d-flex justify-content-center">
            <img class="concert rounded img-fluid" :src="info.url" />
          </div>
        </div>
        <div class="col-7">
          <div class="container-fluid">
            <h2>{{ formatTime(info.posted_at) }}</h2>
            <h1>{{ info.title }}</h1>
            <p>{{ info.details }}</p>
            <p>{{ info.city }}</p>
            <p>{{ info.id }}</p>
            <div v-if="info.limit">
              <p class="text-end">
                Friends going: {{ info.people }}/{{ info.limit }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "dogadaj",
  props: ["info"],

  methods: {
    formatTime(t) {
      return moment(t).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
};
</script>

<style>
</style>