// let myName = "shub      ";

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "Hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.shub = function () {
  console.log("shub is present in all object");
};

Array.prototype.Hello = function () {
  console.log("Hello from array");
};

heroPower.shub();
myHeros.shub();

myHeros.Hello();
// heroPower.Hello() // heroPower.Hello is not a function

// inheritance

const User = {
  name: "shub",
  email: "shub@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  IsAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUser = "shub     ";
String.prototype.trueLength = function () {
  console.log(`"${this}"`);
  console.log(`True length is: ${this.trim().length}`);
};


anotherUser.trueLength()
"shubham".trueLength()