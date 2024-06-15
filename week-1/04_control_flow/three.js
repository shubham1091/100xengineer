const userEmail = "test@mail.com";

if (userEmail) {
  console.log("Got user mail");
} else {
  console.log("Don't have user mail");
}

/* 
falsy values
false, -0, 0, BigInt 0n, "", null, undefined, NaN 
*/

/*
truthy values
everything expect the falsy values 
some intersting things
"0", "false", " ", [], {}, function(){}
*/

// Nullish coalescing operator (??): null undefined

let val1;
val = 5 ?? 10; //val = 5
val = null ?? 10; // val = 10
val = undefined ?? 15; // val = 15

console.log(val);


// Terniary Operator
// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice <=80 ? console.log("less than 80") : console.log("greater than 80");