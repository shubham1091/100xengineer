const desc = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(desc);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// const mynewObj  = Object.create()

const chai = {
  name: "gig",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("code fat geya");
  },
};

// console.log(chai);

// console.log(Object.getOwnPropertyDescriptor(chai, "price"));

Object.defineProperty(chai, "price", { writable: false, enumerable: false });
// console.log(Object.getOwnPropertyDescriptor(chai, "price"));

for (let [key, val] of Object.entries(chai)) {
  if (typeof val === "function") continue;

  console.log(`${key} : ${val}`);
}
