let isLightOn = true;
let isRaining1 = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3; // true
let falseValue = 4 < 3; // false

let empty = null;
console.log(empty);

console.log(3 > 2);

let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
isRaining = false;

isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");

// alert("welcome");

// let number = prompt("Enter number", "number goes here");
// console.log(number);
// let number2 = prompt("enter your name");
// console.log(number2);

// prompt("enter a number");

// confirm("Are you sure you like to delete?");

// const agree = confirm("Are you sure you like to delete? ");
// console.log(agree); // result will be true or false based on what you click on the dialog box

const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
