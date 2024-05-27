let val = 3;
let negValue = -val;
console.log(negValue);

console.table([
  ["addition", "2 + 2", 2 + 2],
  ["subtraction", "2 - 2", 2 - 2],
  ["multiplication", "2 * 2", 2 * 2],
  ["power", "2 ** 2", 2 ** 2],
  ["division", "2 / 2", 2 / 2],
  ["mod", "2 % 2", 2 % 2],
]);

let str1 = "hello";
let str2 = " world";

let str3 = str1 + str2;
console.log(str3); // hello world

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

// tricky
console.log(+true); // 1
// console.log(true+); // ERROR
console.log(+""); // 0

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
