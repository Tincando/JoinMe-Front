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
            >
              <option selected>Category</option>
              <option value="Theater">Theater</option>
              <option value="Concert">Concerts</option>
              <option value="Pub">Pub</option>
              <option value="NewYear">NewYear</option>
            </select>
          </div>
          <div class="col">
            <select
              class="form-select rounded-pill"
              aria-label="Default select example"
            >
              <option selected>Any day</option>
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
            >
              <option selected>Ages 0-99</option>
              <option value="18">18-30</option>
              <option value="30">30-40</option>
              <option value="50">50-60</option>
              <option value="60">60+</option>
            </select>
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
//import { Events } from "@/services";
import dogadaj from "@/components/dogadaj.vue";

export default {
  name: "events",
  data() {
    return {
      store,

      events: store.eventi,
      term: "",
    };
  },
  components: {
    dogadaj,
  },
  watch: {},

  methods: {
    async fetchPosts(term) {
      term = term || store.searchTerm;
      this.events = await store.eventi.getAll(term);
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
  },

  created() {},
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