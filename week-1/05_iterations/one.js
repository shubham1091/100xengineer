// for loop

for (let index = 0; index < 10; index++) {
  const element = index;
  if (element == 7) {
    process.stdout.write("thala for a reason ");
  }
  //   console.log(element);
  process.stdout.write(`${element}, `);
}
console.log();

for (let i = 1; i <= 2; i++) {
  console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 2; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log();
}

let arr = ["flash", "batman", "superman"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    continue;
  }
  if (i == 7) {
    console.log(`Detected ${i}`);
    break;
  }
  console.log(`value of i is ${i}`);
}
