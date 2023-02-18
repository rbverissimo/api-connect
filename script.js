var request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users", true);
request.onload = function () {
  // logic of how to access the API
};

//Sending the request
request.send();
