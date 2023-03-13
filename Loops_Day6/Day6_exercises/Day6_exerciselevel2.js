function generateRandomId(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}

console.log(generateRandomId(8)); // generates an 8-character ID
console.log(generateRandomId(12)); // generates a 12-character ID

//This script defines a function called generateRandomId that takes a length parameter specifying the desired length of the ID string. The function then initializes a string of possible characters that can be used in the ID and an empty string called id. Using a for loop, the function generates a random index by multiplying a random decimal number between 0 and 1 with the length of the characters string and rounding down to the nearest integer using Math.floor(). The charAt() method is then used to retrieve the character at the randomly generated index and add it to the id string. This process is repeated length times to generate an ID string of the desired length. Finally, the function returns the resulting ID string.

// You can call the generateRandomId function with different length parameters to generate IDs of different lengths. In the example above, the function is called with 8 and 12 to generate an 8-character ID and a 12-character ID, respectively.
// Generate a random hexadecimal color code
function generateRandomHexColor() {
  const hexChars = "0123456789ABCDEF";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += hexChars[Math.floor(Math.random() * 16)];
  }
  return hex;
}

// Example usage:
const randomHexColor = generateRandomHexColor();
console.log(randomHexColor); // output example: "#7A2AFA"

// Generate a random RGB color code
function generateRandomRGBColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}

// Example usage:
const randomRGBColor = generateRandomRGBColor();
console.log(randomRGBColor); // output example: "rgb(129,242,18)"

// In this script, we define a function generateRandomRGBColor() that generates a random RGB color code. The function uses the Math.random() function to generate random values for the red, green, and blue components of the color, which are all integers between 0 and 255.

// We then return the result as a string in the format "rgb(red,green,blue)".

// After defining the function, we can call it to generate a random RGB color code and store the result in a variable called randomRGBColor. Finally, we log the value of randomRGBColor to the console using console.log().

let capsCountries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];
let smallCapsCountries = [];
for (let i = 0; i < capsCountries.length; i++) {
  smallCapsCountries.push(capsCountries[i].toLowerCase());
}
console.log(smallCapsCountries);

for (const country of capsCountries) {
  console.log(country.toLowerCase());
}

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}

console.log(newArr); // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

let lengthOfCountries = [];
for (let i = 0; i < capsCountries.length; i++) {
  lengthOfCountries.push(capsCountries[i].length);
}
console.log(lengthOfCountries);

let countriesArray = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

let newArray = [];
for (let i = 0; i < countriesArray.length; i++) {
  let moreDetails = [
    countriesArray[i].toLowerCase(),
    countriesArray[i].substring(0, 3),
    countriesArray[i].length,
  ];
  newArray.push(moreDetails);
}
console.log(newArray);

let newCountryArray = [];
// for (let i = 0; i < countriesArray.length; i++) {
//   countriesArray[i].length == 5
//     ? newCountryArray.push(countriesArray[i])
//     : console.log("All these countries don't have that length ");
// }
// console.log(newCountryArray);

for (const country of countriesArray) {
  if (country.length == 5) {
    newCountryArray.push(country);
  }
  console.log("All these countries don't have that length");
}
console.log(newCountryArray);

let stacksArray = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];

// console.time();
for (stack of stacksArray) {
  console.log(stack);
}
// console.timeEnd();
// console.time()
for (let i = 0; i < stacksArray.length; i++) {
  console.log(stacksArray[i]);
}
// console.timeEnd()

let fruitArray = ["banana", "orange", "mango", "lemon"];
let reversedFruitArray = fruitArray.reverse();
console.log(reversedFruitArray);
