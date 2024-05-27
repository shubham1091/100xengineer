let score = "33";

console.log(typeof score);

let valueInNumber = Number(score);
console.table(["33", typeof valueInNumber, valueInNumber]);

let val = Number("223fax");
console.table(["23fax", typeof val, val]);

let tp = Number(null);
console.table([null, typeof tp, tp]);

let un = Number(undefined);
console.table([undefined, typeof un, un]);

let bl = Number(true);
console.table([true, typeof bl, bl]);

/* Number conversion
"33" => 33
"33abfa" => NaN
true => 1; false=> 0
undefined => NaN
null => 0
*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.table([1, typeof booleanIsLoggedIn, booleanIsLoggedIn]);

/*  boolean conversion
1 => true; 0=> false
"" => false
"something" => true
*/

let stringNumber = String(33)
console.table([33,typeof stringNumber, stringNumber ])