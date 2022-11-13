<template>
  <div class="main">
    <h1>Napravi grupu:</h1>
    <from>
      <div class="from-group">
        <input class="input" v-model="createdBy" />
        <input class="input" v-model="city" />
        <input class="input" v-model="source" />
        <input class="input" v-model="title" />
        <button class="btn btn-primary" @click="postEvent">Make</button>
      </div>
    </from>
  </div>
</template>

<script>
import { Events } from "@/services";

export default {
  name: "start_a_group",
  data() {
    return {
      createdBy: "",
      source: "",
      title: "",
      city: "",
    };
  },

  methods: {
    async postEvent() {
      let post = {
        createdBy: this.createdBy,
        postedAt: new Date(),
        source: this.source,
        title: this.title,
        city: this.city,
      };

      let newpost = await Events.add(post);
      console.log("Spremljeni post", newpost.data);
      this.imageData = null;
      this.$router.push({ name: "events" });
    },
  },
};
</script>

<style>
</style>