function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(2));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, price) {
  this.username = username;
  this.price = price;
}

createUser.prototype.inc = function () {
  this.price++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.price}`);
};

const chai = new createUser("chai", 25);
const tea = createUser("tea", 10);

chai.printMe();
// tea.printMe();

/*
Here's wht happens behind the scenes when the "new" keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor. JavaScript assumes this, the newly created object, to be intended return value.

The new object is returned: After the constructor function has been called, if it dosen't return a non-primitive value (object, array, function, etc) the newly created object is returned
*/
