<template>
  <div class="about">
    <div class="spacer curve2"></div>
    <div class="container-md">
      <h1 class="hidden tr-1">
        With JoinMe, you'll never have to go to an event alone again.
      </h1>
      <section>
        <div class="container-md hidden tr-3">
          <svg
            class="container-md"
            id="visual"
            viewBox="0 0 900 600"
            width="900"
            height="600"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <g transform="translate(470.9017911217349 291.76310800556706)">
              <path
                id="blob1"
                d="M96.6 -167.5C119.4 -135.7 127.9 -99 143.8 -65.4C159.6 -31.7 182.7 -1 186.2 32.1C189.7 65.1 173.4 100.7 149.1 129.8C124.8 158.9 92.4 181.7 52.9 204.4C13.3 227.1 -33.3 249.8 -75.1 243.2C-116.8 236.7 -153.6 200.8 -166.5 159.2C-179.4 117.6 -168.4 70.1 -182.1 21.8C-195.9 -26.5 -234.4 -75.5 -227.7 -109.7C-221 -143.9 -169.2 -163.2 -123.7 -184.6C-78.2 -206 -39.1 -229.5 -1.1 -227.8C36.9 -226.2 73.9 -199.3 96.6 -167.5"
                fill="#d00000"
              ></path>
            </g>
            <g
              transform="translate(409.2620587162136 302.8835403037709)"
              style="visibility: hidden"
            >
              <path
                id="blob2"
                d="M198.5 -130.3C223.7 -70.8 187.6 8.3 144.3 79.8C101 151.3 50.5 215.2 3.3 213.3C-43.9 211.3 -87.8 143.7 -109.4 84.7C-131.1 25.7 -130.5 -24.7 -108.5 -82.2C-86.6 -139.7 -43.3 -204.3 21.6 -216.8C86.6 -229.3 173.2 -189.7 198.5 -130.3"
                fill="#d00000"
              ></path>
            </g>
          </svg>
        </div>
      </section>
      <h1 class="hidden tr-2">
        Start exploring and connecting with others today!
      </h1>
    </div>
    <div class="spacer curve2 flip"></div>
  </div>

  <section class="pt-5">
    <div class="container border rounded py-5 hidden tr-1">
      <h5>
        Welcome to JoinMe the ultimate platform for finding and connecting with
        like-minded individuals who want to attend events together.<br />Whether
        you're a solo traveler looking for companionship at a music festival, a
        sports fan seeking a group to watch the big game with, or just someone
        who doesn't want to go to events alone, JoinMe has you covered.
      </h5>
    </div>
    <div class="container text-start p-3 mt-min3">
      <img class="img-fluid" src="@/assets/mic.png" />
    </div>
    <div
      class="
        bg-image
        shadow-1-strong
        text-white
        company
        d-flex
        justify-content-center
        align-items-center
      "
    >
      <h1 class="hidden tr-2">
        From music festivals and sporting events to theater performances and
        more, we've got you covered.
      </h1>
    </div>
    <div class="container py-5">
      <h5>
        Our mission is to make it easy for people with shared interests to find
        each other and plan to attend events together. We offer a variety of
        tools and features to help you find and connect with potential event
        buddies, including personalized recommendations, group messaging, and
        the ability to create and join events-based communities.
      </h5>
    </div>
    <div class="container p-5 border rounded hidden tr-2">
      <h3>"Because fun never stops"</h3>
      <p class="fst-italic">-Nikola Tesla-</p>
    </div>
    <div class="container text-end p-3 mt-min3">
      <img class="img-fluid" src="@/assets/nT.png" />
    </div>
  </section>
  <!--boje odabrane su 1.#ffba08 i 2.#6a040f  -->
</template>

<script>
import KUTE from "kute.js";

export default {
  mounted() {
    const tween = KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      { repeat: 999, duration: 3000, yoyo: true }
    ).start();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  },
};
</script>


<style scoped>
h1 {
  color: white;
}

.about {
  background-color: #ffba08;
}

.company {
  background-image: url(@/assets/concert-about.jpg);
  background-position: center;
  height: 100vh;
}
</style>
