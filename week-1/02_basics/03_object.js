// singleton Object.create()
// object literals

const mySym = Symbol("key");

const JsUser = {
  name: "shubham",
  "full name": "shubham verma",
  age: 21,
  [mySym]: "sym",
  location: "Jaipur",
  isLoggedIn: false,
};

JsUser.age;
JsUser["age"];
JsUser["full name"];
JsUser[mySym];

JsUser.greeting = function () {
  console.log("hello");
};
JsUser.intro = function () {
  console.log(`Hello my name is ${this.name}`);
};

Object.freeze(JsUser);

JsUser.age = 22;
console.log(JsUser.age);

JsUser.greeting();
JsUser.intro()