<template>
  <div class="events">
    <div class="container-md pt-5 pb-3">
      <h3 class="text-start">Events:</h3>

      <input
        class="form-control"
        type="search"
        placeholder="Upisite ime grada"
        aria-label="Search"
        v-model="store.searchTerm"
      />

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
    <dogadaj v-for="event in events" :info="event" v-bind:key="event.id" />
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
    "store.searchTerm": _.debounce(function (val) {
      this.fetchPosts(val);
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
  },

  mounted() {
    this.fetchPosts();
  },
};
</script>

<style>
.concert {
  width: 250px;
}
</style>