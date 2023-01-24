<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <!--Main content-->
    <div class="spacer curve2"></div>
    <div class="container hidden tr-1">
      <div class="row">
        <div class="col">
          <h1 class="fw-bold">
            Celebrating years and years of real connections on JoinMe
          </h1>
          <p>
            Whatever you’re looking to do this year you don't have to do it
            alone, JoinMe can help. Thousands of events are happening every
            day—join the fun and make new friends.
          </p>
        </div>
        <div class="col-md">
          <img
            src="@/assets/people.jpg"
            class="img-fluid rounded"
            alt="people image"
          />
        </div>
      </div>
    </div>

    <div class="spacer curve1"></div>
    <section class="yellow">
      <div class="spacer curve2"></div>
      <!-- Jos jedan section-->
      <div class="container mt-min3">
        <h2 class="text-start pb-4" style="color: white">
          CHOOSE YOUR POISON?
        </h2>
      </div>

      <div class="container pb-5">
        <div class="row">
          <div class="row">
            <div class="col-md hidden tr-3 py-3">
              <div class="container">
                <div class="card shad">
                  <h5 class="card-title py-3 fw-bold">Concerts</h5>
                  <div class="flex justify-content-center">
                    <img class="w-75 rounded" src="@/assets/concerts.png" />
                  </div>
                  <p class="card-text py-3">
                    Looking for a concert? Look no further
                  </p>
                  <router-link
                    :to="{
                      name: 'events',
                      query: {
                        category: 'concert',
                      },
                    }"
                    class="btn btn-warning py-3"
                    >To Concerts</router-link
                  >
                </div>
              </div>
            </div>
            <div class="col-md hidden tr-2 py-3">
              <div class="card shad">
                <h5 class="card-title py-3 fw-bold">Theater</h5>
                <div class="flex justify-content-center">
                  <img class="w-75 rounded" src="@/assets/theater.png" />
                </div>
                <p class="card-text py-3">
                  Looking for a theater event? Look no further
                </p>
                <router-link
                  :to="{
                    name: 'events',
                    query: {
                      category: 'theater',
                    },
                  }"
                  class="btn btn-warning py-3"
                  >To Theater</router-link
                >
              </div>
            </div>
            <div class="col-md hidden tr-1 py-3">
              <div class="card shad">
                <h5 class="card-title py-3 fw-bold">Pub</h5>
                <div class="flex justify-content-center">
                  <img class="w-75 rounded" src="@/assets/pubs.png" />
                </div>

                <p class="card-text py-3">
                  Looking for a Pub event? Look no further
                </p>
                <router-link
                  :to="{
                    name: 'events',
                    query: {
                      category: 'pub',
                    },
                  }"
                  class="btn btn-warning py-3"
                  >To Pubs</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer curve2 flip"></div>
    </section>

    <div class="spacer curve1 flip mt-min1"></div>
    <!--How it works-->

    <section>
      <div class="container">
        <div class="container text-center">
          <h1 class="fw-bold">How JoinMe works</h1>
          <p class="pb-2">
            You really like this band but none of your friends share your
            enthusiasm? No problem we got you!
          </p>
          <div class="container">
            <div class="row">
              <div class="row p-5">
                <div class="col-md group hidden tr-3 py-5">
                  <div class="container py-4">
                    <img
                      class="container w-50 rounded-circle"
                      src="@/assets/startagroup.jpg"
                    />
                  </div>
                  <div class="px-5">
                    <h2 class="fw-bold">Join a group</h2>
                    <p>
                      Do what you like, with others who like it too, find your
                      like-minded people. And the rest is history!
                    </p>
                  </div>
                </div>
                <div class="col-md hidden tr-2 py-5">
                  <div class="container py-4">
                    <img
                      class="container w-50 rounded-circle"
                      src="@/assets/find_an_event.png"
                    />
                  </div>
                  <div class="px-5">
                    <h2 class="fw-bold">Find an event</h2>
                    <p>
                      Concert, shows, events are happening all the time find
                      someone who has the same taste as you.
                    </p>
                  </div>
                </div>
                <div class="col-md group hidden tr-1 py-5">
                  <div class="container py-4">
                    <img
                      class="container w-50 rounded-circle"
                      src="@/assets/start_a_group.png"
                    />
                  </div>
                  <div class="px-5">
                    <h2 class="fw-bold">Start a group</h2>
                    <p>
                      You don’t have to be an extrovert to find people to go
                      with you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="!auth.authenticated">
          <button
            class="btn btn-lg btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#SignupModal"
          >
            Join JoinMe
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/Home_page.vue";
import { Auth } from "@/services";

export default {
  name: "home",
  data() {
    return {
      auth: Auth.state,
    };
  },
  components: {
    // HelloWorld,
  },

  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  },
};
</script>

<style scoped>
.group {
  border-radius: 5%;
  background-color: rgba(231, 230, 230, 0.466);
}
.pt-6 {
  padding-top: 6rem !important;
}

.py-8 {
  padding-top: 8rem !important;
  padding-bottom: 8rem !important;
}
.yellow {
  background-color: #ffba08;
}

.shad {
  -webkit-box-shadow: 3px 14px 16px 2px rgba(106, 4, 15, 1);
  -moz-box-shadow: 3px 14px 16px 2px rgba(106, 4, 15, 1);
  box-shadow: 3px 14px 16px 2px rgba(106, 4, 15, 1);
}
</style>
