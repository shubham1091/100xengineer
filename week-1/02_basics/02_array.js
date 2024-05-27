const arr = [1, 2, 3, 4, 5];

/**
 * Array.prototype.forEach(callbackFn)
 * Executes a provided function once for each array element.
 */
console.log("forEach Example:");
arr.forEach((element, index) => {
  console.log(`Element at index ${index}:`, element);
});

/**
 * Array.prototype.map(callbackFn)
 * Creates a new array with the results of calling a provided function on every element in the calling array.
 */
const mappedArr = arr.map(element => element + 1);
console.log("\nmap Example:");
console.log("After map(element => element + 1):", mappedArr); // [2, 3, 4, 5, 6]

/**
 * Array.prototype.filter(callbackFn)
 * Creates a new array with all elements that pass the test implemented by the provided function.
 */
const mixedArr = [1, 'two', 3, 'four', 5];
const filteredArr = mixedArr.filter(element => typeof element === "number");
console.log("\nfilter Example:");
console.log("After filter(element => typeof element === 'number'):", filteredArr); // [1, 3, 5]

/**
 * Array.prototype.reduce(callbackFn, initialValue)
 * Executes a reducer function on each element of the array, resulting in a single output value.
 */
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("\nreduce Example:");
console.log("After reduce((acc, cur) => acc + cur, 0):", sum); // 15

/**
 * Array.prototype.reverse()
 * Reverses the array in place.
 */
const reversedArr = [...arr]; // Create a copy to demonstrate reverse
reversedArr.reverse();
console.log("\nreverse Example:");
console.log("After reverse():", reversedArr); // [5, 4, 3, 2, 1]

/**
 * Array.prototype.sort([compareFunction])
 * Sorts the elements of an array in place and returns the sorted array.
 */
const numArr = [4, 2, 5, 1, 3];
numArr.sort((a, b) => a - b);
console.log("\nsort Example:");
console.log("After sort((a, b) => a - b):", numArr); // [1, 2, 3, 4, 5]


