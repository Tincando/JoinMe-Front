import axios from "axios";
import $router from "@/router";

let Service = axios.create({
  baseURL: "https://joinme-cd1i.onrender.com" || "http://localhost:3000/",
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

  async Myevents(email) {
    let response = await Service.get(`/myevents/${email}`);

    let events = response.data.map((doc) => {
      return {
        id: doc._id,
        url: doc.source,
        email: doc.createdBy,
        title: doc.title,
        posted_at: doc.postedAt,
        limit: doc.limit,
        people: doc.people,
        category: doc.category,
        city: doc.city,
        details: doc.details,
        eventDate: doc.eventDate,
      };
    });

    return events;
  },

  async getOne(id) {
    let response = await Service.get(`/events/${id}`);

    let doc = response.data;

    return {
      id: doc._id,
      url: doc.source,
      email: doc.createdBy,
      title: doc.title,
      posted_at: doc.postedAt,
      limit: doc.limit,
      people: doc.people,
      category: doc.category,
      city: doc.city,
      details: doc.details,
      eventDate: doc.eventDate,
      going: doc.going,
    };
  },

  async getAll(searchTerm, category, day, age) {
    let options = {};

    if (searchTerm || category || day || age) {
      options.params = {
        _city: searchTerm,
        _category: category,
        _day: day,
        _age: age,
      };
    }

    let response = await Service.get("/events", options);

    let events = response.data.map((doc) => {
      if (doc.limit == 0) {
        return {
          id: doc.id,
          url: doc.source,
          details: doc.createdBy,
          title: doc.title,
          city: doc.city,
          posted_at: doc.postedAt,
          category: doc.category,
          eventDate: doc.eventDate,
          age: doc.age,
        };
      } else {
        return {
          id: doc.id,
          url: doc.source,
          details: doc.createdBy,
          title: doc.title,
          city: doc.city,
          posted_at: doc.postedAt,
          limit: doc.limit,
          people: doc.people,
          category: doc.category,
          eventDate: doc.eventDate,
          age: doc.age,
        };
      }
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

let User = {
  async signup(newuser) {
    return Service.post("/user", newuser);
  },
};

let Chat = {
  add(comment) {
    return Service.post("/chat", comment);
  },

  async getAll(id) {
    let response = await Service.get(`/chat/${id}`);

    let chats = response.data.map((doc) => {
      return {
        comment: doc.comment,
        user: doc.user,
        event_id: doc.event_id,
        postedAt: doc.postedAt,
        image: doc.image,
      };
    });

    return chats;
  },

  /*
  async getAll(id) {

    let response = await Service.get(`/chat/${id}`);

    let chats = response.data.map((doc) => {
      return {
        comment: doc.comment,
        user: doc.user,
        event_id: doc.event_id,
      };
    });

    return chats;
  },
  */
};

export { Service, Events, Auth, User, Chat };
