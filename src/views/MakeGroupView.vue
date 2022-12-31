<template>
  <div class="main">
    <div class="spacer curve2"></div>
    <div class="main-h1 py-4">
      <h1>Start a group:</h1>
    </div>
    <div class="container p-5">
      <form @submit.prevent="postEvent">
        <div class="from-group">
          <div class="form-group">
            <label for="eventName">Name of the event:</label>
            <input
              class="form-control"
              id="eventName"
              type="text"
              v-model="eventName"
            />
          </div>
          <div class="form group">
            <label for="form-select">Choose Category:</label>
            <select class="form-select mb-3" v-model="category" required>
              <option selected>Open this select menu</option>
              <option value="Concert">Concert</option>
              <option value="Theater">Theater</option>
              <option value="Pub Quiz">Pub Quiz</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label for="city">City:</label>
            <input
              class="form-control"
              type="text"
              id="city"
              v-model="city"
              required
            />
          </div>
          <div class="form-group">
            <label for="source">Url slike: </label>
            <input class="form-control" id="source" v-model="imgSource" />
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="true"
              id="flexCheckDefault"
              v-model="checkLim"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Limit the number of people
            </label>
          </div>

          <div class="form-group" v-if="this.checkLim == true">
            <input
              class="form-control"
              type="number"
              id="limit"
              v-model="limit"
              min="1"
            />
          </div>

          <div class="form-group py-3">
            <button class="btn btn-primary" type="submit">Make</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Events } from "@/services";

export default {
  name: "start_a_group",
  data() {
    return {
      checkLim: false,
      category: "",
      imgSource: "",
      eventName: "",
      city: "",
      limit: 1,
    };
  },

  methods: {},
};
</script>

<style>
</style>