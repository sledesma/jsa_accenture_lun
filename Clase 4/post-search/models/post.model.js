const PostModel = {
  getAll: function (callback) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/");
    xhr.send();
    xhr.addEventListener("load", () => callback(xhr.response));
  },
  getById: function (id, callback) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/" + id);
    xhr.send();
    xhr.addEventListener("load", () => callback(xhr.response));
  },
  getByUserId: function (userId, callback) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open(
      "GET",
      "https://jsonplaceholder.typicode.com/posts/?userId=" + userId
    );
    xhr.send();
    xhr.addEventListener("load", () => callback(xhr.response));
  },
  filter: function (filter, callback) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/");
    xhr.send();
    xhr.addEventListener("load", () =>
      callback(xhr.response.filter(filter))
    );
  },
};
