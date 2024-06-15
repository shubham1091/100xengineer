const tinder = new Object();

tinder.id = "1234afa";
tinder.name = "sam";
tinder.isLoggedIn = false;

console.log(tinder);
const regular = {
  email: "test@mail.com",
  fullname: {
    userfullname: {
      firstname: "shubham",
      lastname: "verma",
    },
  },
};

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

// const obj4 = {obj1,obj2} // will create obj inside obj
const obj4 = Object.assign(obj1, obj2, obj3); // obj1 will get modifyed
const obj5 = Object.assign({}, obj1, obj2, obj3);
// {} optional parameter to make sure that we get a new object and not modify pre existing object

console.table([obj1, obj2, obj3, obj4, obj5]);

const obj6 = { ...obj1, ...obj2, ...obj3 };
console.log(obj6);

const users = [
  {
    id: 1,
    email: "h@mail.com",
  },
  {
    id: 2,
    email: "s@mail.com",
  },
];

console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty("name"));

const course = {
  coursename: "JS",
  price: "999",
  courseInstructor: "shubham",
};
const { courseInstructor } = course;
const { courseInstructor: instructor } = course;

console.log(courseInstructor);

