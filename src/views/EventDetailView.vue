<template>
  <div class="main" v-if="event">
    <div class="spacer curve2"></div>
    <div class="mt-min3">
      <section class="title-section px-5 border-bottom border-3 border-grey">
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
          <div class="row">
            <div class="col-md-9 col-sm-12">
              <div class="container d-flex align-items-start">
                <img
                  class="shadow title-img img-fluid rounded"
                  :src="event.url"
                />
              </div>
              <div class="container text-start py-4">
                <h4 class="fw-bold">Details</h4>
                <div class="container p-4">
                  <p>
                    {{ event.details }}
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
                        {{ formatTime2(event.eventDate) }}
                      </div>
                    </div>
                  </div>
                </section>

                <div class="text-center pt-5 pb-3" v-if="event.limit">
                  <p>People going: {{ event.people }}/{{ event.limit }}</p>
                </div>
                <div class="container text-center" v-if="this.exist == false">
                  <button class="btn btn-primary text-center" @click="pat">
                    Im going
                  </button>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-12 pb-5">
              <div class="container-sm bg-white border rounded">
                <p>{{ event.category }}</p>
                <p>{{ formatTime(event.eventDate) }}</p>
              </div>
            </div>

            <section class="polaznici">
              <div class="container-md">
                <h1 class="text-start">Going:</h1>
                <div class="row row-cols-3 py-5">
                  <div
                    class="col container m-2 border rounded shadow bg-light"
                    v-for="go in event.going"
                    :key="go"
                  >
                    <p>{{ go }}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <hr />
        </div>
      </section>
    </div>

    <!--Komentari -->
    <section class="content">
      <div class="container rounded bg-white">
        <form>
          <div class="form-group py-5">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="What are your thoughts?"
              v-model="comment"
            ></textarea>
            <div class="pt-2 text-end">
              <button class="btn btn-primary" @click="postchat">Comment</button>
            </div>
          </div>
        </form>
        <hr />
        <div :key="comment.id" v-for="comment in comments">
          <comment :info="comment"></comment>
        </div>
        <div class="p-5">
          <div class="text-start">
            <div class="d-flex">
              <img
                class="profil img-thumbnail rounded-circle"
                src="@/assets/nT.png"
              />
              <p class="fw-bold p-3">User1234</p>
            </div>
            <p>It will be amazing!!!</p>
          </div>
          <div class="reply text-start p-3">
            <div class="d-flex">
              <img
                class="profil img-thumbnail rounded-circle"
                src="@/assets/mic.png"
              />
              <p class="fw-bold p-3">UserKing</p>
            </div>
            <p>I can't wait! :)</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import dogadaj from "@/components/dogadaj.vue";
import store from "@/store.js";
import { Events } from "@/services";
import { Chat } from "@/services";
import moment from "moment";
import comment from "@/components/comment.vue";

export default {
  props: ["id"],
  data() {
    return {
      event: null,
      comment: this.comment,
      user: JSON.parse(localStorage.getItem("user")).username,
      comments: [],
      exist: true,
    };
  },

  async mounted() {
    this.event = await Events.getOne(this.id);
    this.comments = await Chat.getAll(this.id);
    this.userExists(this.user);
  },

  name: "event-details",
  components: {
    dogadaj,
    comment,
  },
  methods: {
    formatTime(t) {
      return moment(t).format("MMMM Do YYYY, h:mm:ss a");
    },
    formatTime2(t) {
      return moment(t).calendar();
    },

    async pat() {
      if (this.event.people < this.event.limit || !this.event.limit) {
        let doc = {
          _id: this.event.id,
          people: this.event.people + 1,
          going: this.user,
        };
        let newpost = await Events.up(doc);
        console.log("Spremljeni post", newpost.data);
        this.$router.push({ name: "events" });
      } else {
        alert("Group is full, I'm sorry");
      }
    },

    userExists(x) {
      let result = false;

      for (const i of this.event.going) {
        if (i == x) {
          result = true;
        }
      }
      this.exist = result;
    },

    async postchat() {
      let chat;

      chat = {
        comment: this.comment,
        user: this.user,
        event_id: this.event.id,
        postedAt: new Date(),
      };

      let newchat = await Chat.add(chat);
      console.log("Spremljeni post", newchat.data);
      this.$router.push({ name: "events" });
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

@media (max-width: 767px) {
  .title-img {
    width: 500px;
    height: 150px;
  }
}

.border-grey {
  border-color: rgba(155, 155, 155, 0.466) !important;
}

.profil {
  width: 50px;
  height: 50px;
}
</style>