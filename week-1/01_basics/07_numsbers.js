// Create a new Number object
const num = new Number(123.456);

// Check the type of the Number object
console.log(typeof num); // "object"

// Access the prototype of the Number object
console.log(num.__proto__); // [Number: 0]

// Print the original number value
console.log("Original Number:", num.valueOf()); // 123.456

/**
 * toString()
 * Returns a string representing the specified number.
 */
console.log("toString():", num.toString()); // "123.456"

/**
 * toFixed(digits)
 * Formats a number using fixed-point notation.
 */
console.log("toFixed(2):", num.toFixed(2)); // "123.46"

/**
 * toExponential(fractionDigits)
 * Returns a string representing the number in exponential notation.
 */
console.log("toExponential(2):", num.toExponential(2)); // "1.23e+2"

/**
 * toPrecision(precision)
 * Formats a number to a specified length.
 */
console.log("toPrecision(5):", num.toPrecision(5)); // "123.46"
console.log("toPrecision(2):", num.toPrecision(2)); // "1.2e+2"

/**
 * valueOf()
 * Returns the primitive value of a Number object.
 */
console.log("valueOf():", num.valueOf()); // 123.456

/**
 * Number.isFinite(value)
 * Determines whether the passed value is a finite number.
 */
console.log("Number.isFinite(123.456):", Number.isFinite(123.456)); // true
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity)); // false

/**
 * Number.isInteger(value)
 * Determines whether the passed value is an integer.
 */
console.log("Number.isInteger(123):", Number.isInteger(123)); // true
console.log("Number.isInteger(123.456):", Number.isInteger(123.456)); // false

/**
 * Number.isNaN(value)
 * Determines whether the passed value is NaN (Not-a-Number).
 */
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("Number.isNaN(123.456):", Number.isNaN(123.456)); // false

/**
 * Number.isSafeInteger(value)
 * Determines whether the passed value is a safe integer.
 */
console.log("Number.isSafeInteger(123):", Number.isSafeInteger(123)); // true
console.log(
  "Number.isSafeInteger(Math.pow(2, 53)):",
  Number.isSafeInteger(Math.pow(2, 53))
); // false

/**
 * Number.parseFloat(string)
 * Parses a string argument and returns a floating-point number.
 */
console.log("Number.parseFloat('123.456'):", Number.parseFloat("123.456")); // 123.456

/**
 * Number.parseInt(string, radix)
 * Parses a string argument and returns an integer of the specified radix.
 */
console.log("Number.parseInt('123.456'):", Number.parseInt("123.456")); // 123
console.log("Number.parseInt('1111', 2):", Number.parseInt("1111", 2)); // 15

/**
 * Number.prototype.toLocaleString(locales, options)
 * Converts a number to a string, using locale-specific formatting.
 */
console.log("toLocaleString('en-US'):", num.toLocaleString("en-US")); // "123.456"
console.log("toLocaleString('en-IN'):", num.toLocaleString("en-IN")); // "123.456"
console.log("toLocaleString('de-DE'):", num.toLocaleString("de-DE")); // "123,456"
console.log(
  "toLocaleString('ja-JP'):",
  num.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })
); // "¥123"

console.log(num);