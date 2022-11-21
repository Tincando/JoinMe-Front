import axios from "axios";

let Service = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000,
});

let Events = {
  add(post) {
    return Service.post("/posts", post);
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
