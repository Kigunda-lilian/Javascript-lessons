// for Loop
// For loop structure
// for(initialization, condition, increment/decrement){
//     // code goes here
// }

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// 0 1 2 3 4 5

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// 5 4 3 2 1 0

for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newArr1 = [];
for (let i = 0; i < countries.length; i++) {
  newArr1.push(countries[i].toUpperCase());
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

console.log(newArr1);

// Adding all elements in the array
const numberz = [1, 2, 3, 4, 5];
let sum2 = 0;
for (let i = 0; i < numberz.length; i++) {
  sum2 = sum2 + numberz[i]; // can be shorten, sum2 += numbers[i]
}

console.log(sum2); // 15

// Creating a new array based on the existing array

const numbers = [1, 2, 3, 4, 5];
const newArr2 = [];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  newArr2.push(numbers[i] ** 2);
}

console.log(newArr2); // [1, 4, 9, 16, 25]

const countrys = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newArr3 = [];
for (let i = 0; i < countrys.length; i++) {
  newArr3.push(countrys[i].toUpperCase());
}

console.log(newArr3); // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

// while loop
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

// 0 1 2 3 4 5

// do while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 5);

// 0 1 2 3 4 5

// for of loop
// We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.
// for (const element of arr) {
//   // code goes here
// }

const numbas = [1, 2, 3, 4, 5];

for (const num of numbas) {
  console.log(num);
}

// 1 2 3 4 5

for (const num of numbas) {
  console.log(num * num);
}

// 1 4 9 16 25

// adding all the numbers in the array
let sum4 = 0;
for (const num of numbas) {
  sum4 = sum4 + num;
  // can be also shorten like this, sum += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(sum); // 15

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (const tech of webTechs) {
  console.log(tech.toUpperCase());
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]); // get only the first letter of each element,  H C J R N M
}
const countris = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newArr = [];
for (const country of countris) {
  newArr.push(country.toUpperCase());
}

console.log(newArr); // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

// break
// Break is used to interrupt a loop.

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// 0 1 2

// The above code stops if 3 found in the iteration process.

// continue
// We use the keyword continue to skip a certain iterations.

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// 0 1 2 4 5
