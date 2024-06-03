const user = {
  username: "shubham",
  loginCount: 8,
  signedIn: true,

  /**
   * Retrieves user details from the database.
   */
  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

user.getUserDetails();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcom ${this.username}`);
  };

  return this;
}

const userOne = User("shub", 8, true);
const userTwo = User("sam", 18, false);
console.log(userOne);

const ut = new User("shub", 8, true);
const uf = new User("sam", 18, false);

console.log(ut);
console.log(uf);

console.log(ut.constructor);