// Callback
// A callback is a function which can be passed as parameter to other function. See the example below.
// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2;
};

// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(callback, 3));

// Returning function
// Higher order functions return function as a value​

// Higher order function returning an other function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));

// Let us see were we use call back functions. For instance the forEach method uses call back.

const numbers = [1, 2, 3, 4];
const sumArray = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback);
  return sum;
};
console.log(sumArray(numbers));

// The above example can be simplified as follows:

const numbers1 = [1, 2, 3, 4];

const sumArray1 = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};
console.log(sumArray1(numbers1));

// Setting time
// In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.

// setInterval
// setTimeout
// Setting Interval using a setInterval function
// In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.

// syntax
// function callBack() {
//   // code goes here
// }
// setInterval(callBack, duration);

// function sayHello() {
//   console.log("Hello");
// }
// setInterval(sayHello, 1000); // it prints hello in every second, 1000ms is 1s
// Setting a time using a setTimeout
// In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. The setTimeout global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback wait for that amount of time.

// syntax
// function callback() {
//   // code goes here
// }
// setTimeout(callback, duration) // duration in milliseconds

function sayHello() {
  console.log("Hello");
}
setTimeout(sayHello, 2000); // it prints hello after it waits for 2 seconds.

// forEach
// forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.

// arr.forEach(function (element, index, arr) {
//   console.log(index, element, arr);
// });
// The above code can be written using arrow function
// arr.forEach((element, index, arr) => {
//   console.log(index, element, arr);
// });
// The above code can be written using arrow function and explicit return
// arr.forEach((element, index, arr) => console.log(index, element, arr));

let sum = 0;
const numbers4 = [1, 2, 3, 4, 5];
numbers4.forEach((num) => console.log(num));
console.log(sum);

let sum1 = 0;
const numbers5 = [1, 2, 3, 4, 5];
numbers.forEach((num) => (sum1 += num));

console.log(sum1);

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
countries.forEach((element) => console.log(element.toUpperCase()));

// map
// map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.

// const modifiedArray = arr.map(function (element, index, arr) {
//   return element
// })

/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbers9 = [1, 2, 3, 4, 5];
const numbersSquare = numbers9.map((num) => num * num);

console.log(numbersSquare);

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);

const countries3 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const countriesToUpperCase = countries3.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

/*
// Arrow function
const countriesToUpperCase = countries.map((country) => {
  return country.toUpperCase();
})
//Explicit return arrow function
const countriesToUpperCase = countries.map(country => country.toUpperCase());
*/
const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
);

// filter
// Filter: Filter out items which full fill filtering conditions and return a new array.

//Filter countries containing land
const countriesContainingLand = countries3.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);

const countriesEndsByia = countries3.filter((country) =>
  country.endsWith("ia")
);
console.log(countriesEndsByia);

const countriesHaveFiveLetters = countries3.filter(
  (country) => country.length === 5
);
console.log(countriesHaveFiveLetters);

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log(scoresGreaterEighty);

// reduce
// reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

// arr.reduce((acc, cur) => {
//   // some operations goes here before returning a value
//  return
// }, initialValue)

const numbers2 = [1, 2, 3, 4, 5];
const sum2 = numbers2.reduce((acc, cur) => acc + cur, 0);

console.log(sum2);

// every
// every: Check if all the elements are similar in one aspect. It returns boolean

const names3 = ["Asabeneh", "Mathias", "Elias", "Brook"];
const areAllStr = names3.every((name) => typeof name === "string"); // Are all strings?

console.log(areAllStr);

// find
// find: Return the first element which satisfies the condition
const ages = [24, 22, 25, 32, 35, 18];
const age = ages.find((age) => age < 20);

console.log(age);

const names4 = ["Asabeneh", "Mathias", "Elias", "Brook"];
const result = names4.find((name) => name.length > 7);
console.log(result);

const scores2 = [
  { name: "Asabeneh", score: 95 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const score = scores2.find((user) => user.score > 80);
console.log(score);

// findIndex
// findIndex: Return the position of the first element which satisfies the condition
const names7 = ["Asabeneh", "Mathias", "Elias", "Brook"];
const ages3 = [24, 22, 25, 32, 35, 18];

const result1 = names7.findIndex((name) => name.length > 7);
console.log(result1); // 0

const age1 = ages3.findIndex((age) => age < 20);
console.log(age1); // 5

// some
// some: Check if some of the elements are similar in one aspect. It returns boolean

const names9 = ["Asabeneh", "Mathias", "Elias", "Brook"];
const bools = [true, true, true, true];

const areSomeTrue = bools.some((b) => b === true);

console.log(areSomeTrue); //true

const areAllStr3 = names9.some((name) => typeof name === "number"); // Are all strings ?
console.log(areAllStr3); // false

// sort
// sort: The sort methods arranges the array elements either ascending or descending order. By default, the sort() method sorts values as strings.This works well for string array items but not for numbers. If number values are sorted as strings and it give us wrong result. Sort method modify the original array. It is recommended to copy the original data before you start using sort method.

// Sorting string values
const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort()); // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted

// Sorting Numeric values
// As you can see in the example below, 100 came first after sorted in ascending order. Sort converts items to string , since '100' and other numbers compared, 1 which the beginning of the string '100' became the smallest. To avoid this, we use a compare call back function inside the sort method, which return a negative, zero or positive.

const numbers0 = [9.81, 3.14, 100, 37];
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers0.sort()); //[100, 3.14, 37, 9.81]
numbers0.sort(function (a, b) {
  return a - b;
});

console.log(numbers0); // [3.14, 9.81, 37, 100]

numbers0.sort(function (a, b) {
  return b - a;
});
console.log(numbers0); //[100, 37, 9.81, 3.14]

// Sorting Object Arrays
// When ever we sort objects in an array. We use the object key to compare. Lets see the example below.

// objArr.sort(function (a, b) {
//   if (a.key < b.key) return -1;
//   if (a.key > b.key) return 1;
//   return 0;
// });

// // or

// objArr.sort(function (a, b) {
//   if (a["key"] < b["key"]) return -1;
//   if (a["key"] > b["key"]) return 1;
//   return 0;
// });

const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyo", age: 100 },
  { name: "Elias", age: 22 },
];
users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users); // sorted ascending
// [{…}, {…}, {…}, {…}]
