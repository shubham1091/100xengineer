const user = "shubham";
const repoCount = 30;

// console.log(name + repoCount + "val");// not good

console.log(`Hello my name is ${user} and my repo count is ${repoCount}`);

// Create a new String object
const gameName = new String("shubham");

// Check the type of the String object
console.log(typeof gameName); // "object"

// Access the prototype of the String object
console.log(gameName.__proto__); // [String: '']

// Print the original string value
console.log("Original String:", gameName.toString()); // "shubham"

/**
 * charAt(index)
 * Returns the character at the specified index.
 */
console.log("charAt(1):", gameName.charAt(1)); // "h"

/**
 * charCodeAt(index)
 * Returns the Unicode value of the character at the specified index.
 */
console.log("charCodeAt(1):", gameName.charCodeAt(1)); // 104

/**
 * concat(str1, str2, ...)
 * Concatenates the specified string(s) to the original string.
 */
console.log("concat():", gameName.concat(" is", " awesome")); // "shubham is awesome"

/**
 * includes(searchString, position)
 * Determines whether the original string contains the specified string.
 */
console.log("includes('shu'):", gameName.includes("shu")); // true

/**
 * endsWith(searchString, length)
 * Checks if the original string ends with the specified string.
 */
console.log("endsWith('am'):", gameName.endsWith("am")); // true

/**
 * indexOf(searchValue, fromIndex)
 * Returns the index of the first occurrence of the specified value.
 */
console.log("indexOf('a'):", gameName.indexOf("a")); // 5

/**
 * lastIndexOf(searchValue, fromIndex)
 * Returns the index of the last occurrence of the specified value.
 */
console.log("lastIndexOf('a'):", gameName.lastIndexOf("a")); // 5

/**
 * localeCompare(compareString, locales, options)
 * Compares two strings in the current locale.
 */
console.log("localeCompare('Shubham'):", gameName.localeCompare("Shubham")); // Locale dependent, usually returns 1

/**
 * match(regexp)
 * Retrieves the result of matching a string against a regular expression.
 */
console.log("match(/sh/):", gameName.match(/sh/)); // ["sh"]

/**
 * replace(searchValue, newValue)
 * Replaces occurrences of a substring or pattern with a new value.
 */
console.log(
  "replace('shubham', 'Shubham'):",
  gameName.replace("shubham", "Shubham")
); // "Shubham"

/**
 * search(regexp)
 * Searches the string for a match against a regular expression.
 */
console.log("search('ubh'):", gameName.search("ubh")); // 1

/**
 * slice(beginIndex, endIndex)
 * Extracts a section of a string and returns it as a new string.
 */
console.log("slice(1, 4):", gameName.slice(1, 4)); // "hub"

/**
 * split(separator, limit)
 * Splits a string into an array of substrings based on a separator.
 */
console.log("split('u'):", gameName.split("u")); // ["sh", "bham"]

/**
 * startsWith(searchString, position)
 * Checks if the string starts with the specified substring.
 */
console.log("startsWith('sh'):", gameName.startsWith("sh")); // true

/**
 * substring(indexStart, indexEnd)
 * Returns a new string containing the specified part of the original string.
 */
console.log("substring(1, 4):", gameName.substring(1, 4)); // "hub"

/**
 * toLowerCase()
 * Converts the string to lowercase.
 */
console.log("toLowerCase():", gameName.toLowerCase()); // "shubham"

/**
 * toUpperCase()
 * Converts the string to uppercase.
 */
console.log("toUpperCase():", gameName.toUpperCase()); // "SHUBHAM"

/**
 * toString()
 * Returns a string representing the specified object.
 */
console.log("toString():", gameName.toString()); // "shubham"

/**
 * trim()
 * Removes whitespace from both ends of the string.
 */
const stringWithSpaces = new String("  shubham  ");
console.log("trim():", stringWithSpaces.trim()); // "shubham"

/**
 * valueOf()
 * Returns the primitive value of a String object.
 */
console.log("valueOf():", gameName.valueOf()); // "shubham"

/**
 * repeat(count)
 * Returns a new string with the original string repeated a specified number of times.
 */
console.log("repeat(2):", gameName.repeat(2)); // "shubhamshubham"

/**
 * padStart(targetLength, padString)
 * Pads the current string with another string until the resulting string reaches the given length.
 */
console.log("padStart(10, '*'):", gameName.padStart(10, "*")); // "***shubham"

/**
 * padEnd(targetLength, padString)
 * Pads the current string with another string until the resulting string reaches the given length.
 */
console.log("padEnd(10, '*'):", gameName.padEnd(10, "*")); // "shubham***"

/**
 * normalize(form)
 * Returns the Unicode Normalization Form of the string.
 */
const accentedString = new String("déjà vu");
console.log("normalize('NFC'):", accentedString.normalize("NFC")); // "déjà vu"

/**
 * toLocaleLowerCase()
 * Converts the string to lowercase, according to the host’s locale.
 */
console.log("toLocaleLowerCase():", gameName.toLocaleLowerCase()); // "shubham"

/**
 * toLocaleUpperCase()
 * Converts the string to uppercase, according to the host’s locale.
 */
console.log("toLocaleUpperCase():", gameName.toLocaleUpperCase()); // "SHUBHAM"

// Output the entire gameName object to inspect its properties
console.log(gameName);
