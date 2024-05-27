const isUserLoggedIn = true;

if (2 == "2") {
  console.log("executed");
}

// <, > <=, >=, ==, ===, !=, !==

const temperature = 41;
if (temperature < 50) {
  console.log("temperature is less than 50");
} else {
  console.log("temperature is greater than 50");
}

const score = 200;
if (score > 100) {
  const power = "fly";
  console.log(`User power: ${power}`);
}

const balance = 1000;

if (balance > 500) console.log("test"), console.log("test"); // not recommended

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}

const userLoggedIn = true;
const card = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = false;

if (userLoggedIn && card) {
  console.log("Allow to buy");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("Used logged in");
}

