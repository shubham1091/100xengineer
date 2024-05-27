const myObject = {
  js: "javascript",
  cpp: "c++",
  py: "python",
  ts: "typescript",
};

for (const key in myObject) {
  console.log(`${key} is for ${myObject[key]}`);
}

const programming = ["js", "py", "cpp", "java"];

for (const key in programming) {
  console.log(`${programming[key]} is at index ${key}`);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("USA", "America");

// does not work
for (const key in map) {
    console.log(key);
    
}