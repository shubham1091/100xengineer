console.table([
  ["greater than", "2 > 2", 2 > 2],
  ["less than", "2 < 2", 2 < 2],
  ["greater than equal to", "2 >= 2", 2 >= 2],
  ["less than equal to", "2 <= 2", 2 <= 2],
  ["equal to", "2 == 2", 2 == 2],
  ["not equal to", "2 != 2", 2 != 2],
]);

console.log(`"2" > 1`, "2" > 1); // true
console.log(`"02" > 1`, "02" > 1); // true

console.log("null > 0", null > 0); // false
console.log("null == 0", null == 0); // false
console.log("null === 0", null === 0); // false
console.log("null >= 0", null >= 0); // false

console.log("undefined == 0", undefined == 0); // all case false

