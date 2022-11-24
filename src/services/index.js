import axios from "axios";
import $router from "@/router";

let Service = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000,
});

// prije svakog poslanog requesta na backend izvrši:
Service.interceptors.request.use((request) => {
  try {
    request.headers["Authorization"] = "Bearer " + Auth.getToken();
  } catch (e) {
    console.error(e);
  }
  return request;
});
// nakon svakog odgovora s backenda izvrši:
Service.interceptors.response.use(
  (response) => {
    console.log("Interceptor", response);
    return response;
  },
  (error) => {
    if (error.response.status == 401) {
      Auth.logout();
      $router.go();
    }
    // console.error('Interceptor', error.response);
  }
);

let Events = {
  add(event) {
    return Service.post("/events", event);
  },

  up(event) {
    return Service.patch(`/event/${event._id}`, event);
  },

  async getOne(id) {
    let response = await Service.get(`/events/${id}`);

    let doc = response.data;

    return {
      id: doc._id,
      url: doc.source,
      email: doc.createdBy,
      title: doc.title,
      posted_at: Number(doc.postedAt),
      limit: doc.limit,
      people: doc.people,
    };
  },

  async getAll(searchTerm) {
    let options = {};

    if (searchTerm) {
      options.params = {
        _any: searchTerm,
      };
    }

    let response = await Service.get("/posts", options);
    let events = response.data.map((doc) => {
      return {
        id: doc.id,
        url: doc.source,
        details: doc.createdBy,
        title: doc.title,
        city: doc.city,
        posted_at: doc.postedAt,
        limit: doc.limit,
        people: doc.people,
      };
    });
    return events;
  },
};

let Auth = {
  // primamo user/pass, šaljemo upit na backend i ako dobijemo token
  // spremimao ga u "localStorage" - JavaScript memoriju koja OSTAJE
  // i nakon što zatvorimo preglednik ili osvježimo stranicu
  async login(username, password) {
    let response = await Service.post("/auth", {
      username,
      password,
    });
    let user = response.data;
    // localStorage može sačuvati samo string, boolean ili number
    // pa moramo pretvoriti objekt u string (JSON je string)
    localStorage.setItem("user", JSON.stringify(user));
  },
  // logout znači brisanje tokena
  logout() {
    localStorage.removeItem("user");
  },
  // dohvat tokena
  getToken() {
    let user = Auth.getUser();
    if (user && user.token) {
      return user.token;
    }
  },
  // dohvat spremljenog korisnika
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
  // provjera jesmo li autentificirani
  authenticated() {
    let user = Auth.getUser();
    if (user && user.username) {
      return true;
    }
    return false;
  },
  // state će nam služiti da ove varijable budu dostupne u vue.js
  // radi se o "getter" funkcijama koje dopuštaju da ih čitamo
  // kao da su varijable (slično kao Vue computed, ali na razini JS-a)
  state: {
    get user() {
      return Auth.getUser();
    },
    get authenticated() {
      return Auth.authenticated();
    },
  },
};

export { Service, Events, Auth };
