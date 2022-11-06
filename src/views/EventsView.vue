<template>
  <div class="events">
    <div class="container-md pt-5 pb-3">
      <h3 class="text-start">Events:</h3>
      <hr />
    </div>
    <div class="container event text-start">
      <div class="flex row py-4">
        <div class="col">
          <div class="d-flex justify-content-center">
            <img class="concert rounded img-fluid" src="@/assets/concert.jpg" />
          </div>
        </div>
        <div class="col-7">
          <div class="container-fluid">
            <h2>FRI, NOV 11, 5:00 PM CET</h2>
            <h1>LED ZEPELLIN CONCERT</h1>
            <p>I'm looking for someone to go to the concert with :)</p>
            <p class="text-end">0/10</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "events",
};
</script>

<style>
.concert {
  width: 250px;
}
</style>