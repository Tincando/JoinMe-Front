<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-custom navbar-text">
    <div class="container-fluid">
      <router-link class="nav-link" to="/"
        ><img src="" class="logo"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/events">Events</router-link>
          </li>
          <li class="nav-item" v-if="auth.authenticated">
            <router-link class="nav-link" to="/start_a_group"
              >Start a Group +</router-link
            >
          </li>
        </ul>

        <ul class="navbar-nav mb-2 mb-lg-0">
          <div v-if="auth.authenticated">
            <a @click="logout" type="button" class="nav-link"> Logout </a>
          </div>
          <a
            v-if="!auth.authenticated"
            type="button"
            class="nav-link"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            Login
          </a>
          <a
            v-if="!auth.authenticated"
            type="button"
            class="nav-link"
            data-bs-toggle="modal"
            data-bs-target="#SignupModal"
          >
            Sign up
          </a>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
  <!-- Navbar -->
</template>
  
  <script>
import { Auth } from "@/services";

export default {
  name: "NavBar",
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
.logo {
  width: 60px;
}
.navbar-custom {
  background-color: #6a040f;
}

.navbar-custom .navbar-text {
  color: #ffba08 !important;
}
</style>
  