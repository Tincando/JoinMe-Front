<template>
  <Navbar />
  <Login_module />
  <SignUp_modal />
  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue";
import Login_module from "./components/Login_module.vue";
import Navbar from "./components/Navbar.vue";
import SignUp_modal from "./components/SignUp_modal.vue";
import { Auth } from "@/services";
import store from "@/store.js";

export default {
  name: "app",
  data() {
    return {
      auth: Auth.state,
      store: store,
    };
  },
  components: {
    Navbar,
    Login_module,
    SignUp_modal,
    Footer,
  },

  methods: {
    async login() {
      let success = await Auth.login(this.email, this.password);
      console.log("Rezultat prijave", success);
      if (success == true) {
        this.$router.push({ name: "events" });
      }
    },
  },
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

body {
  // background-image: url("@/assets/web_back1.jpg");
  //background-size: cover;
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
    color: #ffba08 !important;

    &.router-link-exact-active {
      color: #d00000 !important;
    }
  }
}

.spacer {
  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.curve1 {
  background-image: url("@/assets/curve_2.svg");
}
.curve2 {
  background-image: url("@/assets/curve_1.svg");
}
.curve3 {
  background-image: url("@/assets/curve_3.svg");
}
.curve4 {
  background-image: url("@/assets/curve4.svg");
}
.curve5 {
  background-image: url("@/assets/curve5.svg");
}

.flip {
  transform: rotate(180deg);
}

.mt-min1 {
  margin-top: -2rem !important;
}

.bg-red {
  background-color: #6a040f;
}
.text-yellow {
  color: #ffba08;
}

.bg-yellow {
  background-color: #6a040f;
}
</style>
