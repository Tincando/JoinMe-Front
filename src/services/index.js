import axios from "axios";

let Service = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000,
});

let Events = {
  add(event) {
    return Service.post("/events", event);
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
        posted_at: Number(doc.posted_at),
      };
    });
    return events;
  },
};

export { Service, Events };
