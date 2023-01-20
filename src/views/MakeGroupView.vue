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
          <div class="form-group">
            <label for="date">Date of the event:</label>
            <input
              class="form-control"
              type="date"
              id="date"
              v-model="eventDate"
              required
            />
          </div>
          <div class="form-group">
            <label for="details">Details:</label>
            <textarea
              class="form-control"
              rows="5"
              placeholder="Event details..."
              id="details"
              type="text"
              v-model="details"
            ></textarea>
          </div>
          <div class="form group">
            <label for="form-select">Choose Category:</label>
            <select class="form-select mb-3" v-model="category" required>
              <option value="" disabled>Category</option>
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
            <label for="source">Url image: </label>
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

          <div class="form-group">
            <input
              class="form-control"
              type="number"
              id="age"
              v-model="age"
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
import moment from "moment";

export default {
  name: "start_a_group",
  data() {
    return {
      checkLim: false,
      category: "",
      imgSource: "",
      eventName: "",
      city: "",
      details: "",
      eventDate: "",
      age: 18,
      limit: 1,
      user: JSON.parse(localStorage.getItem("user")).username,
      going: [],
    };
  },

  methods: {
    async postEvent() {
      let post;

      if (this.checkLim == false) {
        post = {
          category: this.category,
          createdBy: this.user,
          postedAt: new Date(),
          source: this.imgSource,
          title: this.eventName,
          city: this.city,
          details: this.details,
          eventDate: moment(this.eventDate).format(),
          limit: 0,
          people: 0,
          age: this.age,
          going: [this.user],
        };
      } else {
        post = {
          category: this.category,
          createdBy: this.user,
          postedAt: new Date(),
          source: this.imgSource,
          title: this.eventName,
          city: this.city,
          limit: this.limit,
          details: this.details,
          eventDate: moment(this.eventDate).format(),
          age: this.age,
          going: [this.user],
          people: 0,
        };
      }

      let newpost = await Events.add(post);
      console.log("Spremljeni post", newpost.data);
      this.$router.push({ name: "events" });
    },
  },
};
</script>

<style>
</style>