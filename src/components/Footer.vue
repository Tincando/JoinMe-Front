<template>
  <!-- Footer -->
  <div class="spacer curve4"></div>
  <footer class="text-center text-lg-start footer-custom">
    <!-- Section: Social media -->
    <section
      class="d-flex justify-content-center justify-content-lg-between p-4"
    >
      <!-- Left -->
      <div class="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks</span>
      </div>
      <!-- Right -->
      <div>
        <a href="" class="me-4 text-reset">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="bi bi-twitter"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="bi bi-google"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="bi bi-linkedin"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="bi bi-github"></i>
        </a>
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">JoinMe</h6>
            <p>
              Thousands of events are happening every day—join the fun and make
              new friends.
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">JoinMe</h6>
            <p class="text-reset">
              <router-link class="text-reset" to="/">Home</router-link>
            </p>
            <p>
              <router-link class="text-reset" to="/about">About</router-link>
            </p>
            <p>
              <a
                v-if="!auth.authenticated"
                type="button"
                class="text-reset"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </a>
            </p>
            <p>
              <a
                v-if="!auth.authenticated"
                type="button"
                class="text-reset"
                data-bs-toggle="modal"
                data-bs-target="#SignupModal"
              >
                Sign up
              </a>
            </p>
            <p v-if="auth.authenticated">
              <router-link class="text-reset" to="/start_a_group"
                >Make a group</router-link
              >
            </p>
            <p v-if="auth.authenticated">
              <a @click="logout" type="button" class="text-reset"> Logout </a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Events</h6>
            <p>
              <a href="#!" class="text-reset">Concerts</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Pubs</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Theater</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p>Pula, Croatia</p>
            <p><i class="bi bi-envelope me-3"></i>info@example.com</p>
            <p><i class="bi bi-telephone me-3"></i>Tel: + 385 874 146 384</p>
            <p><i class="bi bi-phone me-3"></i>Mob: + 385 91 146 525</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
      © 2021 Copyright
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script>
import { Auth } from "@/services";

export default {
  name: "Footer",
  data() {
    return { auth: Auth.state };
  },

  methods: {
    logout() {
      Auth.logout();
      this.$router.go();
    },
  },
};
</script>

<style>
.footer-custom {
  background-color: #6a040f;
  color: #ffba08;
}
</style>