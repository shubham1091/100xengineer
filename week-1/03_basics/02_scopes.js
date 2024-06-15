let a = 10;
const b = 20;
var c = 30;

// console.table([a, b, c]);

if (true) {
  let a = 200;
  console.log("INNER: ", a);
  let d = 10;
  const e = 20;
  var f = 30;
}

console.log("OUTER: ", a);

//console.log(d); // ERROR
//console.log(e); // ERROR
console.log(f); // Intersting

function one() {
  const username = "shubham";
  function two() {
    const web = "www.example.com";
    console.log(username);
  }
  //console.log(web); // ERROR
  two();
}
one();

// +++++++++++++++++++++++++++++++++++++

addOne(5); // works
function addOne(val) {
  return val + 1;
}

//addTwo(5); // ERROR

const addTwo = function (val) {
  return val + 2;
};
