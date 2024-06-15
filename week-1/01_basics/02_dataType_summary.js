// Primitive
//7 types : string, number, boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("124");
const anotherId = Symbol("124");

console.log(id === anotherId);
console.log(typeof id);

const bigNumber = 64845425812554584n;

// Reference (non primiteve)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "shubham",
  age: 21,
};

const myFunc = function () {
  console.log("hello world");
};

console.log(typeof myFunc);

//+++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(non-primitive)
// stack == copy, heap == ref

let num = 21;
let sum = num;

sum = 23;

console.table([num, sum]);

let usr = {
  email: "user@gmail.com",
  id: "12",
};

let usr2 = usr;

usr2.id = Math.ceil(Math.random() * 100);

console.table([usr, usr2]);
