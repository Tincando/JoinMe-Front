<template>
  <div class="main" v-if="event">
    <div class="spacer curve2"></div>
    <div class="mt-min3">
      <section class="title-section px-5 border-bottom border-3">
        <div class="title d-flex justify-content-start">
          <h1 class="fw-bold text-uppercase">{{ event.title }}</h1>
        </div>
        <div class="subtitle d-flex justify-content-start">
          <p>Created by:</p>
          <p class="fw-bold">{{ event.email }}</p>
        </div>
      </section>
      <section class="content px-5 py-4">
        <div class="row">
          <div class="col-9">
            <div class="container d-flex align-items-start">
              <img class="title-img img-fluid rounded" :src="event.url" />
            </div>
            <div class="container text-start py-4">
              <h4 class="fw-bold">Details</h4>
              <div class="container p-4">
                <p>
                  The Imaginary Band" is performing at the "Fantasy Theater"
                  tomorrow night at 8:00 PM. The show is a high-energy, upbeat
                  performance featuring a mix of original songs and covers from
                  a variety of musical genres. The lead singer, "Jade," has a
                  powerful voice and is known for her dynamic stage presence.
                  The band also features a talented group of musicians on
                  guitar, bass, drums, and keyboards. Tickets for the show are
                  available now through the theater's website or by calling the
                  box office. Prices range from $25 to $50, depending on the
                  seating location. There will also be a limited number of VIP
                  tickets available, which include a meet-and-greet with the
                  band and access to a special VIP lounge during the show.
                </p>
              </div>

              <section>
                <h5>Tags:</h5>
                <div class="row py-3">
                  <div class="col d-flex justify-content-center">
                    <div class="tag rounded-pill border px-4 py-3 fw-bold">
                      {{ event.category }}
                    </div>
                  </div>
                  <div class="col d-flex justify-content-center">
                    <div class="tag rounded-pill border px-4 py-3 fw-bold">
                      {{ event.city }}
                    </div>
                  </div>
                  <div class="col d-flex justify-content-center">
                    <div class="tag rounded-pill border px-4 py-3 fw-bold">
                      {{ formatTime2(event.posted_at) }}
                    </div>
                  </div>
                </div>
              </section>

              <div v-if="event.limit">
                <p>Friends going: {{ event.people }}/{{ event.limit }}</p>

                <button class="btn btn-primary" @click="pat">Im going</button>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="container-sm bg-white border rounded">
              <p>{{ event.category }}</p>
              <p>{{ formatTime(event.posted_at) }}</p>
            </div>
          </div>
        </div>
        <hr />
      </section>
    </div>

    <section class="content">
      <div class="container rounded bg-white">
        <h1>Text:</h1>
        <p>Type here:</p>
        <p>Start of the conversation</p>
      </div>
    </section>
  </div>
</template>

<script>
import dogadaj from "@/components/dogadaj.vue";
import store from "@/store.js";
import { Events } from "@/services";
import moment from "moment";

export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  async mounted() {
    this.event = await Events.getOne(this.id);
  },
  name: "event-details",
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

    async pat() {
      if (this.event.people < this.event.limit) {
        let doc = {
          _id: this.event.id,
          people: this.event.people + 1,
        };
        let newpost = await Events.up(doc);
        console.log("Spremljeni post", newpost.data);
        this.$router.push({ name: "events" });
      } else {
        alert("Group is full, I'm sorry");
      }
    },
  },
};
</script>

<style scoped>
.content {
  background-color: rgb(224, 224, 224);
}

.tag {
  background-color: #ffba08;
}

.title-img {
  width: 900px;
  height: 450px;
}
</style>