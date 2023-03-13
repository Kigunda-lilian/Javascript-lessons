let isMyBirthday = true;
isMyBirthday
  ? console.log("Happy birthday Lilian!")
  : console.log("Today is not your birthday");

let iAmLate = false;
iAmLate ? console.log("Next time come early") : console.log("Good girl");

function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true));
// Expected output: "$2.00"

console.log(getFee(false));
// Expected output: "$10.00"

console.log(getFee(null));
// Expected output: "$10.00"

let isWednesday = true;
isWednesday ? console.log("yes") : console.log("no");

const age1 = 26;
const beverage = age1 >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"

// let authenticated = true;
// let nextURL = authenticated
//   ? (alert('You will redirect to admin area'), '/admin')
//   : (alert('Access denied'), '/403');

// // redirect to nextURL here
// console.log(nextURL); // '/admin'

let locked = 1;
let canChange = locked != 1 ? true : false;
console.log(canChange);

let speed = 70;
let message = speed >= 90 ? "too fast" : speed >= 80 ? "fast" : "good";
console.log(message);

// firstName, lastName, country, city, age, isMarried, year variable
let firstName = "Lilian";
let lastName = "Kanana";
let country = "Kenya";
let city = "Nairobi";
let age = 27;
let isMarried = true;
let year = 2023;

console.log(typeof year);
console.log(typeof isMarried);
console.log(typeof city);

console.log(typeof "10" === 10);
console.log(parseInt("9.8") === 9.8);
// falsy values
let a = NaN;
let b = null;
let c = 0;
let d = false;
let e = undefined;
let f = "";

console.log(4 > 3);
console.log(4 != 4);
console.log(4 == "4");
console.log(4 === "4");

let p = "Python";
let j = "jargon";

console.log(p.length == j.length);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!true);
// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 < 3 && 10 > 12));
console.log(!(4 < 3 || 10 > 12));

let today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();
let currentDate = today.getDate();
let currentDay = today.getDay();
let currentHours = today.getHours();
let currentMinutes = today.getMinutes();
console.log(
  currentYear,
  currentMonth,
  currentDate,
  currentDay,
  currentHours,
  currentMinutes
);
console.log(today);
const allSeconds = Date.now();
console.log(allSeconds);
const timeInSeconds = new Date().getTime();
console.log(timeInSeconds);
