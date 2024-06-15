const fs = require("fs");
//sync...
fs.writeFileSync("./data/text.txt", "Hello");

// async
fs.writeFile("./data/text.txt", "Hello world async", () => {
  console.log("something went wrong");
});

const res = fs.readFileSync("./data/contacts.txt", "utf-8");
console.log(res);

fs.readFile("./data/contacts.txt", "utf-8", (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log("async read", res);
  }
});

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    fs.appendFileSync("./data/text.txt", `${new Date()} hello\n`);
  }, 1000 * i);
}
fs.cpSync("./data/text.txt", "./data/cp.txt");
fs.unlinkSync("./data/cp.txt");
console.log(fs.statSync("./data/text.txt").isFile());

fs.mkdirSync("./test");

setTimeout(() => {
  fs.rmdirSync("./test");
}, 1000);
