<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <!--Main content-->
    <div class="container pt-6 pb-5">
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
        <div class="col">
          <img
            src="@/assets/people.jpg"
            class="img-fluid rounded"
            alt="people image"
          />
        </div>
      </div>
    </div>
    <hr />
    <!-- Jos jedan section-->
    <div class="container py-5">
      <div class="row g-2">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Concerts</h5>
              <img class="w-50" src="@/assets/startagroup.jpg" />
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Theater</h5>
              <img class="w-50" src="@/assets/startagroup.jpg" />
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Pub</h5>
              <img class="w-50" src="@/assets/startagroup.jpg" />
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <!--How it works-->
    <div class="container py-5">
      <div class="container text-center">
        <h1 class="fw-bold">How JoinMe works</h1>
        <p class="pb-2">
          You really like this band but none of your friends share your
          enthusiasm? No problem we got you!
        </p>
        <div class="container">
          <div class="row p-5">
            <div class="col group">
              <div class="container py-4">
                <img class="container w-50 rounded-circle" src="" />
              </div>
              <div class="px-5">
                <h2 class="fw-bold">Join a group</h2>
                <p>
                  Do what you like, with others who like it too, find your
                  like-minded people. And the rest is history!
                </p>
              </div>
            </div>
            <div class="col">
              <div class="container py-4">
                <img class="container w-50 rounded-circle" src="" />
              </div>
              <div class="px-5">
                <h2 class="fw-bold">Find an event</h2>
                <p>
                  Concert, shows, events are happening all the time find someone
                  who has the same taste as you.
                </p>
              </div>
            </div>
            <div class="col group">
              <div class="container py-4">
                <img class="container w-50 rounded-circle" src="" />
              </div>
              <div class="px-5">
                <h2 class="fw-bold">Start a group</h2>
                <p>
                  You don’t have to be an extrovert to find people to go with
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          class="btn btn-lg btn-success"
          data-bs-toggle="modal"
          data-bs-target="#SignupModal"
        >
          Join JoinMe
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/Home_page.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
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
</style>
