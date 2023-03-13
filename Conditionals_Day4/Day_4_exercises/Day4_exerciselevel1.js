// let userInput = parseInt(prompt("How old are you?"));
// let age = userInput;

// let userInput2 = prompt("How old are you?");
// let age2 = parseInt(userInput2);
// let age3 = Number(userInput2);
// let age4 = +userInput2;

// let rightAge = 18 - age;
// let rightAge2 = 18 - age2;
// let rightAge3 = 18 - age3;
// let rightAge4 = 18 - age4;

let age = 9;
let remainingYears = 18 - age;
if (age >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log(`You are left with ${remainingYears} to drive`);
}

let age1 = 29;
if (age1 == 18) {
  console.log("You are 18 years old");
} else if (age1 > 18) {
  console.log(`You are ${age1} years`);
} else if (age1 < 18) {
  console.log(" You are too young");
} else {
  console.log("");
}

let age2 = 811;
switch (true) {
  case 18:
    console.log("You are right age");
    break;
  case age2 > 18:
    console.log("You are older");
    break;
  case age2 < 18:
    console.log("You are younger");
    break;
  default:
    console.log("bla bla");
}

let age3 = 46;
age3 == 18
  ? console.log("You are the right age mamaa")
  : age3 < 18
  ? console.log("You are young mamaa")
  : age3 > 18
  ? console.log("You are old mamaa")
  : console.log("Input your age");

let number = 45;
if (number % 2 === 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}

if (number % 2 !== 0) {
  console.log(`${number} is an odd number`);
} else {
  console.log(`${number} is an even number`);
}

number % 2 === 0
  ? console.log(`${number} is an even number`)
  : console.log(`${number} is an odd number`);

switch (true) {
  case number % 2 === 0:
    console.log(`${number} is an even number`);
    break;
  case number % 2 !== 0:
    console.log(`${number} is an odd number`);
    break;
  default:
    console.log("");
}
