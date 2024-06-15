function SetUsername(username) {
  // complex logic
  this.username = username;
  console.log("call");
}

function createUser(username, email, password) {
  //   SetUsername(username);
  // passing current exectuing  we can always send "this" as first optional parameter
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@meta.com", "123");

console.log(chai);
