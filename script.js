//Create the object that will handle the request
var request = new XMLHttpRequest();

//Open connection
request.open("GET", "https://jsonplaceholder.typicode.com/users", true);

//What happens once the connection is established
request.onload = function () {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach((users) => {
      console.log(users.username);
    });
  } else {
    console.log("error");
  }
};

//Sending the request
request.send();
