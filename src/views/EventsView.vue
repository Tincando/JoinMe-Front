<template>
  <div class="events">
    <div class="spacer curve2"></div>

    <div class="container-md pb-3 mt-min3">
      <h3 class="text-start">Events :</h3>

      <input
        class="form-control"
        type="search"
        placeholder="Enter desired city"
        aria-label="Search"
        v-model="store.searchTerm"
      />
      <div class="container-md">
        <div class="row py-3">
          <div class="col">
            <select
              class="form-select rounded-pill"
              aria-label="Default select example"
              v-model="cat"
            >
              <option value="" disabled>Category</option>
              <option value="theater">Theater</option>
              <option value="concert">Concerts</option>
              <option value="pub">Pub</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="col">
            <select
              class="form-select rounded-pill"
              aria-label="Default select example"
              v-model="day"
            >
              <option disabled value="">Any day</option>
              <option value="day">Today</option>
              <option value="week">This week</option>
              <option value="month">This month</option>
              <option value="year">This year</option>
            </select>
          </div>
          <div class="col">
            <select
              class="form-select rounded-pill"
              aria-label="Default select example"
              v-model="age"
            >
              <option disabled value="">Ages 0-99</option>
              <option value="18">18-30</option>
              <option value="30">30-40</option>
              <option value="50">50-60</option>
              <option value="60">60+</option>
            </select>
          </div>
          <div class="col">
            <button class="btn btn-primary" @click="filterPosts">filter</button>
          </div>
        </div>
      </div>
      <hr />
    </div>

    <div :key="event.id" v-for="event in events">
      <router-link :to="{ name: 'event-details', params: { id: event.id } }">
        <dogadaj :info="event"
      /></router-link>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";
import _ from "lodash";
import { Events } from "@/services";
import dogadaj from "@/components/dogadaj.vue";

export default {
  name: "events",
  data() {
    return {
      store,
      events: [],
      term: "",
      cat: "",
      day: "",
      age: "",
    };
  },
  components: {
    dogadaj,
  },
  watch: {
    "store.searchTerm": _.debounce(function (term) {
      this.fetchPosts(term);
    }, 500),
  },

  methods: {
    async fetchPosts(term) {
      term = term || store.searchTerm;

      this.events = await Events.getAll(term);

      /*
      fetch(`http://localhost:3000/posts?city=${this.term} `)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("Podaci s backenda", data);
          this.events = data.map((doc) => {
            return {
              id: doc.id,
              url: doc.source,
              details: doc.createdBy,
              title: doc.title,
              city: doc.city,
              posted_at: Number(doc.posted_at),
            };
          });
        });

       
        */
    },
    async filterPosts(term, category, day, age) {
      term = store.searchTerm;
      category = this.cat || this.$route.query.category;
      day = this.day;
      age = this.age;

      this.events = await Events.getAll(term, category, day, age);
    },
  },

  created() {
    this.filterPosts();
  },
};
</script>

<style  >
.form-select {
  background-color: #ebe9e9d8;
}

.form-select option {
  background-color: white;
}

a {
  text-decoration: none;
  color: black;
}
.concert {
  width: 250px;
}
</style>