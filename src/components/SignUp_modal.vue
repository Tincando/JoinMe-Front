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
        <div class="modal-header">
          <h5 class="modal-title" id="SignupmodalLabel">Sign up</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
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
            <button type="submit" class="btn btn-primary">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style></style>
