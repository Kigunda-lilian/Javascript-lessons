let names = "liliana";
let check = names.length >= 7 ? "Your name is long" : "Your name is short";
console.log(check);

let myName = "Kanana";
let familyName = "Kigunda";
let compare =
  myName.length > familyName.length
    ? "My name ,Kanana is longer than my family name Kigunda"
    : myName.length < familyName.length
    ? "My name ,Kanana is shorter than my family name Kigunda"
    : myName.length == familyName.length
    ? "My name ,Kanana is equal to my family name Kigunda"
    : "";

console.log(compare);

let myAge = 250;
let yourAge = 25;
let ageDiff = myAge - yourAge;
console.log("I am " + ageDiff + " " + "older than you");
console.log(`I am ${ageDiff} older than you`);
// console.log(`I am ${myAge}-${yourAge} older than you`);// not correct

// Calculating the number of seconds a person can live in JavaScript

var years = 100;
// var years = parseFloat(prompt("Enter the number of years a person can live: "));

var seconds = years * 365 * 24 * 60 * 60;

console.log(
  "The number of seconds a person can live is: " + seconds + " seconds"
);

let today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();
let currentDate = today.getDate();
let currentDay = today.getDay();
let currentHours = today.getHours();
let currentMinutes = today.getMinutes();
console.log(`${currentYear}- ${currentMonth}-${currentDate}
  ${currentHours}:
  ${currentMinutes}`);

// Creating a human readable time format using JavaScript Date time object

var date = new Date();

var year = date.getFullYear();
var month = (date.getMonth() + 1).toString().padStart(2, "0");
var day = date.getDate().toString().padStart(2, "0");
var hours = date.getHours().toString().padStart(2, "0");
var minutes = date.getMinutes().toString().padStart(2, "0");

var time = year + "-" + month + "-" + day + " " + hours + ":" + minutes;

console.log("Human readable time format: " + time);

