class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const shub = new User("shub");

// console.log(shub.createId());

const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe()
