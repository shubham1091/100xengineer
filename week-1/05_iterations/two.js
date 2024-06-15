let idx = 0;
while (idx < 10) {
  console.log(`val of idx is ${idx}`);
  idx = idx + 2;
}

const arr = ["flash", "batman", "superman"];

let itr = 0;
while (itr < arr.length) {
  console.log(`value is ${arr[itr]}`);
  itr++;
}

let score = 11;

do {
  console.log(`score is ${score}`);
  score = score + 2;
} while (score <= 10);
