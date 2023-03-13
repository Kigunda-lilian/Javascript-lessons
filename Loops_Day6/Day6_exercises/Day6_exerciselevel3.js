// To copy the countries array without mutating the original array, you can use either the spread operator or the slice() method to create a new array with the same elements:

// Using the spread operator:

const countries = [
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
const copiedCountries = [...countries];
console.log(copiedCountries);

// Using the slice() method:
// const countries3 = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
// const copiedCountries3 = countries3.slice();

// const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

const multiWordCountries = countries.filter((country) => country.includes(" "));

console.log(multiWordCountries); // prints the array of countries with two or more words

// let lowerCaseCountries = reversedCountries.tolowerCase();
// console.log(lowerCaseCountries);

const countries3 = [
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

// for (const country in countries) {
//   console.log(country.toLowerCase());
// }
let reversedCountries = countries.reverse();
for (let i = 0; i < countries.length; i++) {
  let lowerCasecountries = countries[i].toLowerCase();
  console.log(lowerCasecountries);
}
