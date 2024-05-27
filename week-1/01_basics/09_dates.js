/* 
js DATE obj represent a single momnet in time in a platform-independent format.
milliseconds since the midnight at the beginning of january 1, 1970 UTC
*/

// Create a new Date object for the current date and time
const now = new Date();
console.log("Current Date:", now);

/**
 * getDate()
 * Returns the day of the month (1-31) for the specified date.
 */
console.log("getDate():", now.getDate());

/**
 * getMonth()
 * Returns the month (0-11) for the specified date.
 */
console.log("getMonth():", now.getMonth()); // 0 = January, 11 = December

/**
 * getFullYear()
 * Returns the year (4 digits for 4-digit years) for the specified date.
 */
console.log("getFullYear():", now.getFullYear());

/**
 * getHours()
 * Returns the hour (0-23) for the specified date.
 */
console.log("getHours():", now.getHours());

/**
 * getMinutes()
 * Returns the minutes (0-59) for the specified date.
 */
console.log("getMinutes():", now.getMinutes());

/**
 * getSeconds()
 * Returns the seconds (0-59) for the specified date.
 */
console.log("getSeconds():", now.getSeconds());

/**
 * getTime()
 * Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
 */
console.log("getTime():", now.getTime());

/**
 * setDate(day)
 * Sets the day of the month (1-31) for a specified date.
 */
let modifiableDate = new Date(now);
modifiableDate.setDate(15);
console.log("setDate(15):", modifiableDate);

/**
 * setFullYear(year, month, day)
 * Sets the full year (4 digits for 4-digit years) for a specified date.
 */
modifiableDate.setFullYear(2025);
console.log("setFullYear(2025):", modifiableDate);

/**
 * setMonth(month, day)
 * Sets the month (0-11) for a specified date.
 */
modifiableDate.setMonth(5); // 5 = June
console.log("setMonth(5):", modifiableDate);

/**
 * setHours(hours, min, sec, ms)
 * Sets the hours (0-23) for a specified date.
 */
modifiableDate.setHours(20);
console.log("setHours(20):", modifiableDate);

/**
 * toDateString()
 * Returns the date portion of a Date object as a human-readable string.
 */
console.log("toDateString():", now.toDateString());

/**
 * toISOString()
 * Returns the date as a string in simplified extended ISO format (ISO 8601).
 */
console.log("toISOString():", now.toISOString());

/**
 * toLocaleDateString(locales, options)
 * Returns a string with a language-sensitive representation of the date portion of this date.
 */
console.log("toLocaleDateString():", now.toLocaleDateString());
console.log("toLocaleDateString('en-US'):", now.toLocaleDateString('en-US'));
console.log("toLocaleDateString('en-IN'):", now.toLocaleDateString('en-IN'));

/**
 * toLocaleTimeString(locales, options)
 * Returns a string with a language-sensitive representation of the time portion of this date.
 */
console.log("toLocaleTimeString():", now.toLocaleTimeString());
console.log("toLocaleTimeString('en-US'):", now.toLocaleTimeString('en-US'));
console.log("toLocaleTimeString('en-IN'):", now.toLocaleTimeString('en-IN'));

/**
 * toLocaleString(locales, options)
 * Returns a string with a language-sensitive representation of this date.
 */
console.log("toLocaleString():", now.toLocaleString());
console.log("toLocaleString('en-US'):", now.toLocaleString('en-US'));
console.log("toLocaleString('en-IN'):", now.toLocaleString('en-IN'));

/**
 * toString()
 * Returns a string representing the specified Date object.
 */
console.log("toString():", now.toString());

/**
 * Date.now()
 * Returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
 */
console.log("Date.now():", Date.now());

/**
 * Date.parse(dateString)
 * Parses a date string and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
 */
console.log("Date.parse('2024-05-26T14:23:00Z'):", Date.parse('2024-05-26T14:23:00Z'));
