// for of

/*
["","",""]
[{},{},{}]
*/
const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
  if (val == 3) {
    break;
  }
  console.log(val);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  if (greet == " ") {
    continue;
  }
  console.log(greet);
}

// Maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("USA", "America");

console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// array destructur
for (const [key, val] of map) {
  console.log(`${key} := ${val}`);
}

const obj = {
    game1: "NFS",
    game2: "Spiderman",
};

/*
// objects is not iterable
for (const [key, val] of obj) {
  console.log(`${key} := ${val}`);
} 
*/

