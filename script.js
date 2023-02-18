var request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users", true);
request.onload = function () {
  var data = JSON.parse(this.response);

  data.forEach((users) => {
    console.log(users.username);
  });
};

//Sending the request
request.send();
