<template>
  <div
    class="modal fade"
    id="loginModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-0 bg-red">
          <h5 class="modal-title text-yellow" id="exampleModalLabel">Login</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="spacer curve2"></div>
        <div class="modal-body">
          <div class="container pb-3">
            <img class="logo" src="@/assets/logo.png" />
          </div>
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                required
              />
            </div>
            <button class="btn btn-warning">Login</button>
          </form>
        </div>
        <div class="spacer curve1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth } from "@/services";

export default {
  name: "Login_module",

  data() {
    return {
      auth: Auth.state,
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let success = await Auth.login(this.email, this.password);
      console.log("Rezultat prijave", success);

      if (success == undefined) {
        this.$router.go();
      }
    },
  },
};
</script>
<style>
</style>
