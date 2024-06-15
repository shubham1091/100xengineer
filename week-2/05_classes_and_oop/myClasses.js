// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    //complex logic
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@mail.com", "123");
const shub = new User("shub")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

console.log(shub);
