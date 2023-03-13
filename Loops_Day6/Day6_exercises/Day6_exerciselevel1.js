const { timeEnd } = require("console");

console.time();
let str3 = "lilian";
console.log(str3.slice(0, 1).toUpperCase() + str3.slice(1, str3.length));
console.timeEnd();

console.time();
let str = "lilian";
let str2 = " ";
for (let i = 0; i < str.length; i++) {
  if (i === 0) {
    str2 += str[i].toUpperCase();
    continue;
  }
  str2 += str[i];
}
console.log(str2);
console.timeEnd();

console.time();
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.timeEnd();

console.time();
let k = 0;
while (k <= 10) {
  console.log(k);
  k++;
}
console.timeEnd();

console.time();
p = 0;
do {
  console.log(p);
  p++;
} while (p <= 10);
console.timeEnd();

let hassh = "#";
do {
  console.log(hassh);
  hassh++;
} while (hassh <= 7);

for (let hash = 0; hash <= 10; hash++) {
  console.log(`${hash} * ${hash} = ${hash * hash}`);
  // console.log(`${hash} * ${hash} = ${hash}**2`);// wrong
  console.log(`${hash} * ${hash} = ${hash ** 2}`);
}

// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }

for (let i = 0; i <= 7; i++) {
  console.log("#".repeat(i));
}

for (let i = 0; i <= 10; i++) {
  let square = i ** 2;
  let powerThree = i ** 3;
  console.log(i, square, powerThree);

  console.log(i, i ** 2, i ** 3);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
  continue;
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  continue;
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
  // console.log(sum);
}
console.log(sum);

let sumEven = 0;
let sumOdd = 0;
let asArray = [];
for (let i = 0; i <= 100; i++) {
  i % 2 == 0
    ? (sumEven += i)
    : i % 2 !== 0
    ? (sumOdd += i)
    : console.log(" Not valid");
}
console.log(
  "The sum of all evens from 0 to 100 is: " +
    sumEven +
    " ." +
    "The sum of all odds is :" +
    sumOdd
);
console.log(asArray.push(sumEven, sumOdd));
console.log(asArray);

let b = Math.floor(Math.random() * 80) + 50;
console.log(b);

// let randomArray = Array (Math.floor(Math.random()))

// let random = Math.floor(Math.random());
// let fiveArray = [5];
// let filledArray = fiveArray.fill(random);
// console.log(filledArray);

const arr1 = [];
for (let i = 0; i < 5; i++) {
  arr1.push(Math.floor(Math.random() * 10) + 1);
}
console.log(arr1);

const arr2 = [];
while (arr2.length < 5) {
  arr2.push(Math.floor(Math.random() * 10) + 1);
}
console.log(arr2);

const arr = [];
while (arr.length < 5) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  if (!arr.includes(randomNumber)) {
    arr.push(randomNumber);
  }
}
console.log(arr);

// This script uses a while loop to generate random numbers until the length of the array is 5. The Math.random() function generates a random decimal number between 0 and 1, and Math.floor() rounds it down to the nearest integer. Multiplying this number by 10 gives a range of 0 to 9, and adding 1 gives a range of 1 to 10. The script then checks if the randomly generated number is already in the array using the includes() method. If the number is not already in the array, it is added to the array using the push() method. Finally, console.log() is used to print the resulting array to the console.

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let id = "";
for (let i = 0; i < 6; i++) {
  id += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(id);

// This script first defines a string of possible characters that can be used in the ID. It then initializes an empty string called id. Using a for loop, the script generates a random index by multiplying a random decimal number between 0 and 1 with the length of the characters string and rounding down to the nearest integer using Math.floor(). The charAt() method is then used to retrieve the character at the randomly generated index and add it to the id string. This process is repeated 6 times to generate a 6-character ID. Finally, console.log() is used to print the resulting ID string to the console
