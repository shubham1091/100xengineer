const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers.map((num) => num * 2);
console.log(myNumbers);
console.log(newNums);

const Num = myNumbers
  .map((num) => num * 3)
  .map((num) => num + 1)
  .filter((num) => num % 2 == 0);

console.log(Num);
