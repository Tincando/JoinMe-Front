<template>
  <div class="main">
    <div class="main-h1 py-4">
      <h1>Start a group:</h1>
    </div>
    <div class="container p-5">
      <from>
        <div class="from-group">
          <div class="form-group">
            <label for="createdby">Name:</label>
            <input
              class="form-control"
              id="createdby"
              type="text"
              v-model="createdBy"
            />
          </div>
          <div class="form-group">
            <label for="city">City:</label>
            <input class="form-control" type="text" id="city" v-model="city" />
          </div>
          <div class="form-group">
            <label for="source">Url slike: </label>
            <input class="form-control" id="source" v-model="source" />
          </div>
          <div class="form-group">
            <label for="title">Name of the event: </label>
            <input class="form-control" id="title" v-model="title" />
          </div>
          <div class="form-group">
            <label for="limit">Limit number of people: </label>
            <input
              class="form-control"
              type="number"
              id="limit"
              v-model="limit"
              min="0"
            />
          </div>
          <div class="form-group py-3">
            <button class="btn btn-primary" @click="postEvent">Make</button>
          </div>
        </div>
      </from>
    </div>
  </div>
</template>

<script>
import { Events } from "@/services";

export default {
  name: "start_a_group",
  data() {
    return {
      createdBy: "",
      source: "",
      title: "",
      city: "",
      limit: "",
    };
  },

  methods: {
    async postEvent() {
      let post = {
        createdBy: this.createdBy,
        postedAt: new Date(),
        source: this.source,
        title: this.title,
        city: this.city,
        limit: this.limit,
        people: 0,
      };

      let newpost = await Events.add(post);
      console.log("Spremljeni post", newpost.data);
      this.$router.push({ name: "events" });
    },
  },
};
</script>

<style>
</style>