const UserModel = {

  getAll: function(callback) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users/");
    xhr.send();
    xhr.addEventListener("load", () => callback(xhr.response));
  }

};