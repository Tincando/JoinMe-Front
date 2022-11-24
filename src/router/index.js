import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { Auth } from "@/services";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/events",
    name: "events",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EventsView.vue"),
  },
  {
    path: "/start_a_group",
    name: "start_a_group",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MakeGroupView.vue"),
  },

  {
    path: "/event/:id",
    props: true,
    name: "event-details",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EventDetailView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// izvrši prije svake rute
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page;
  const publicPages = ["/", "/login", "/signup", "/events"];
  const authRequired = !publicPages.includes(to.path);
  const user = Auth.getUser();
  // ako je potreban login, ali nema korisnika
  if (authRequired && !user) {
    return next("/");
  }
  next();
});

export default router;
