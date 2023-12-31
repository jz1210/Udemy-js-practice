//Review and learn the JavaScript

// Values and Variables, let or const instead of var. (block scope and function scope)
console.log("Jonas");
console.log(23);
console.log(40 + 8 + 23 - 10);

let firstName = "Someone";

console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "John";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Student";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types (boolean, null, undefined, number, string, symbol)
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);
