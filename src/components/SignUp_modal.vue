<template>
  <div
    class="modal fade"
    id="SignupModal"
    tabindex="-1"
    aria-labelledby="SignupmodalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-0 bg-red">
          <h5 class="modal-title text-yellow" id="SignupmodalLabel">Sign up</h5>
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
          <form>
            <div class="form-group">
              <label for="Name">Your Name</label>
              <input
                type="name"
                v-model="name"
                class="form-control"
                id="name"
                aria-describedby="name"
              />
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="example@email.com"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We’ll use your email address to send you updates.</small
              >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <label for="location">Location</label>
            <input
              type="location"
              v-model="location"
              class="form-control"
              id="location"
              aria-describedby="location"
              placeholder="City or zip code"
            />
            <div class="form-group">
              <label for="age">Age</label>
              <input
                type="number"
                v-model="age"
                class="form-control"
                id="age"
                aria-describedby="age"
                min="18"
                max="99"
                placeholder="18-99"
              />
            </div>
            <button @click="signup" class="btn btn-warning">Sign up</button>
          </form>
        </div>
        <div class="spacer curve1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { User } from "@/services";

export default {
  name: "SignUp",

  data() {
    return {
      name: "",
      email: "",
      password: "",
      location: " ",
      age: " ",
    };
  },
  methods: {
    async signup() {
      let newuser = {
        name: this.name,
        username: this.email,
        password: this.password,
      };
      let success = await User.signup(newuser);
      console.log("Rezultat prijave", success);
    },
  },
};
</script>

<style></style>
