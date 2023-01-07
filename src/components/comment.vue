<template>
  <div class="main">
    <div class="px-5 py-3">
      <div class="text-start">
        <div class="d-flex">
          <img
            class="profil img-thumbnail rounded-circle"
            src="@/assets/nT.png"
          />
          <p class="fw-bold p-3">{{ info.user }}</p>
        </div>
        <p>{{ info.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  props: ["info"],
};
</script>

<style>
.profil {
  width: 50px;
  height: 50px;
}
</style>