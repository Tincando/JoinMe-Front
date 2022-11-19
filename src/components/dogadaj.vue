<template>
  <div class="main">
    <div class="container event text-start">
      <div class="flex row py-4">
        <div class="col">
          <div class="d-flex justify-content-center">
            <img class="concert rounded img-fluid" :src="info.url" />
          </div>
        </div>
        <div class="col-7">
          <div class="container-fluid">
            <h2>{{ info.posted_at }}</h2>
            <h1>{{ info.title }}</h1>
            <p>{{ info.details }}</p>
            <p>{{ info.city }}</p>

            <p class="text-end">0/10</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dogadaj",
  props: ["info"],
};
</script>

<style>
</style>