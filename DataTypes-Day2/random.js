// If you want to find a random integer in between min (inclusive) to max (inclusive), you can use the following formula:

// Math.floor(Math.random() * (max - min + 1)) + min

// input from the user
// const min = parseInt(prompt("Enter a min value: "));
// const max = parseInt(prompt("Enter a max value: "));

const min = 50;
const max = 80;
// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${a}`);

// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

// Math.random() always returns a number lower than 1.

// Math.random() used with Math.floor() can be used to return random integers.

// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);

// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);

// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;

// Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;

let b = Math.floor(Math.random() * 80) + 50;
console.log(b);

const c = Math.floor(Math.random() * (80 - 50 + 1)) + 50;
console.log(c);
