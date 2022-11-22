<template>
  <Login_module />
  <SignUp_modal />
  <Navbar />
  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue";
import Login_module from "./components/Login_module.vue";
import Navbar from "./components/Navbar.vue";
import SignUp_modal from "./components/SignUp_modal.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Login_module,
    SignUp_modal,
    Footer,
  },

  methods: {},
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

body {
  background-image: url("@/assets/web_back1.jpg");
  background-size: cover;
  font-family: "Montserrat", sans-serif;
}

.hidden {
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-100%);
}

.tr-1 {
  transition: all 1s;
}
.tr-2 {
  transition: all 1.5s;
}
.tr-3 {
  transition: all 2s;
}

@media (prefers-reduced-motion: no-preference) {
  .show {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #303030;

    &.router-link-exact-active {
      color: #bb200c;
    }
  }
}
</style>
