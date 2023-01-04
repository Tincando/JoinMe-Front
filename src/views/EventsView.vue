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
              v-model="store.category_tag"
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
              v-model="store.day_tag"
            >
              <option disabled value="">Any day</option>
              <option value="soon">Starting soon</option>
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
              <option value="week">This week</option>
            </select>
          </div>
          <div class="col">
            <select
              class="form-select rounded-pill"
              aria-label="Default select example"
              v-model="store.age_tag"
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
    <div class="container event text-start">
      <div class="flex row py-4">
        <div class="col">
          <div class="d-flex justify-content-center">
            <img class="concert rounded img-fluid" src="@/assets/concert.jpg" />
          </div>
        </div>
        <div class="col-7">
          <div class="container-fluid">
            <h2>FRI, NOV 11, 5:00 PM CET</h2>
            <h1>LED ZEPELLIN CONCERT</h1>
            <p>I'm looking for someone to go to the concert with :)</p>
            <p class="text-end">0/10</p>
          </div>
        </div>
      </div>
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
      category = store.category_tag || this.category;
      day = store.day_tag;
      age = store.age_tag;

      this.events = await Events.getAll(term, category, day, age);
    },
  },

  created() {
    this.fetchPosts();
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