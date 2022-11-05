<template>
  <Login_module />
  <SignUp_modal />
  <Navbar />
</template>

<script>
import Login_module from "./components/Login_module.vue";
import Navbar from "./components/Navbar.vue";
import SignUp_modal from "./components/SignUp_modal.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Login_module,
    SignUp_modal,
  },
  setup() {},
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
