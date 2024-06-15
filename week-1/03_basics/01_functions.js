function sayMyName() {
  console.log("S");
  console.log("H");
  console.log("U");
  console.log("B");
  console.log("H");
  console.log("A");
  console.log("M");
}
sayMyName();

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}
addTwoNumbers();
addTwoNumbers(3, 4);

function add(num1, num2) {
  let res = num1 + num2;
  return res;
  console.log(res); // unreachable code
}

let result = add(2, 4);
console.log(result);

function loginUserMessage(username) {
  //   if (username === undefined) {
  //     console.log("Please enter a username");
  //     return;
  //   }
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage("shubham"));

function workername(username = "sam") {
  return `${username} just logged in`;
}

function calculateCartPrice(...num) {
  return num;
}

console.log(calculateCartPrice(2, 3, 4, 5));

const usr = {
  username: "shubham",
  price: 120,
};
function handleObject(obj) {
  console.log(`Usernam is ${obj.username} and price is ${obj.price}`);
}

handleObject(usr);
handleObject({ username: "sam", price: 300 });
