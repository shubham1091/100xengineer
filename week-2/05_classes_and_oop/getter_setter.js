class User {
  constructor(email, pass) {
    this.email = email;
    this.pass = pass;
  }

  get pass() {
    return this._pass.toUpperCase();
  }

  set pass(val) {
    this._pass = val;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(val) {
    this._email = val;
  }
}

const shub = new User("shub@email.com", "asd");

console.log(shub.pass);
