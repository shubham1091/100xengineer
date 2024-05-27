// Create an array for demonstration
const arr = [1, 2, 3, 4, 5];

/**
 * Array.length
 * Returns the number of elements in an array.
 */
console.log("Array length:", arr.length); // 5

/**
 * Array.isArray(value)
 * Determines whether the passed value is an Array.
 */
console.log("Is array:", Array.isArray(arr)); // true
console.log("Is array:", Array.isArray(123)); // false

/**
 * Array.from(arrayLike, mapFn, thisArg)
 * Creates a new Array instance from an array-like or iterable object.
 * 
 * Examples:
 */
console.log("Array from string:", Array.from("hello")); // ['h', 'e', 'l', 'l', 'o']
console.log("Array from Set:", Array.from(new Set([1, 2, 3]))); // [1, 2, 3]

/**
 * Array.of(element0, element1, ..., elementN)
 * Creates a new Array instance with a variable number of elements.
 */
console.log("Array of elements:", Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
console.log("Array of one element:", Array.of(7)); // [7]

/**
 * Array.push(element1, ..., elementN)
 * Adds one or more elements to the end of an array and returns the new length.
 */
arr.push(6);
console.log("After push(6):", arr); // [1, 2, 3, 4, 5, 6]

/**
 * Array.pop()
 * Removes the last element from an array and returns that element.
 */
const lastElement = arr.pop();
console.log("After pop():", arr); // [1, 2, 3, 4, 5]
console.log("Popped element:", lastElement); // 6

/**
 * Array.shift()
 * Removes the first element from an array and returns that element.
 */
const firstElement = arr.shift();
console.log("After shift():", arr); // [2, 3, 4, 5]
console.log("Shifted element:", firstElement); // 1

/**
 * Array.unshift(element1, ..., elementN)
 * Adds one or more elements to the beginning of an array and returns the new length.
 */
arr.unshift(0);
console.log("After unshift(0):", arr); // [0, 2, 3, 4, 5]

/**
 * Array.concat(array1, ..., arrayN)
 * Merges two or more arrays and returns a new array.
 */
const newArr = arr.concat([6, 7, 8]);
console.log("After concat([6, 7, 8]):", newArr); // [0, 2, 3, 4, 5, 6, 7, 8]

/**
 * Array.join(separator)
 * Joins all elements of an array into a string and returns this string.
 */
const joinedStr = arr.join("-");
console.log("After join('-'):", joinedStr); // "0-2-3-4-5"

/**
 * Array.slice(begin, end)
 * Returns a shallow copy of a portion of an array into a new array object.
 */
const slicedArr = arr.slice(1, 3);
console.log("After slice(1, 3):", slicedArr); // [2, 3]

/**
 * Array.splice(start, deleteCount, item1, ..., itemN)
 * Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
 * 
 * Examples:
 */
let spliceArr = [1, 2, 3, 4, 5];

// Remove 2 elements starting from index 1
let removed = spliceArr.splice(1, 2);
console.log("After splice(1, 2):", spliceArr); // [1, 4, 5]
console.log("Removed elements:", removed); // [2, 3]

// Add elements without removing any
spliceArr = [1, 2, 3, 4, 5];
spliceArr.splice(2, 0, 'a', 'b');
console.log("After splice(2, 0, 'a', 'b'):", spliceArr); // [1, 2, 'a', 'b', 3, 4, 5]

// Replace 2 elements starting from index 2
spliceArr = [1, 2, 3, 4, 5];
spliceArr.splice(2, 2, 'x', 'y');
console.log("After splice(2, 2, 'x', 'y'):", spliceArr); // [1, 2, 'x', 'y', 5]

/**
 * Array.indexOf(searchElement, fromIndex)
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 */
const index = arr.indexOf("a");
console.log("Index of 'a':", index); // -1 (not found, since 'a' is not in the array)

/**
 * Array.includes(valueToFind, fromIndex)
 * Determines whether an array includes a certain value among its entries, returning true or false.
 */
const includesValue = arr.includes(4);
console.log("Includes 4:", includesValue); // true


/**
 * Array.flat(depth)
 * Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 * 
 * Example:
 */
const nestedArr = [1, [2, [3, [4, 5]]]];
const flatArr = nestedArr.flat(2);
console.log("After flat(2):", flatArr); // [1, 2, 3, [4, 5]]
