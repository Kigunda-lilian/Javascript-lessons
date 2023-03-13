const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

callback = (n) => sum;
countries.forEach((country) => console.log(country));
let sum = 0;
sumOfNumbers = numbers.forEach((number) => (sum += number));
console.log(sumOfNumbers);
console.log(sum);
upperCaseCountries = countries.map((country) => country.toUpperCase());
console.log(upperCaseCountries);
countriesLength = countries.map((country) => country.length);
console.log(countriesLength);
squareNumbers = numbers.map((num) => {
  square = num ** 2;
  //   console.log(square);
  return square;
});
console.log(squareNumbers);
products.map((item, price) => console.log(item, price));

countriesWithLand = countries.filter((country) => country.includes("land"));
console.log(countriesWithLand);

countriesWithSixLetters = countries.filter((country) => country.length == 6);
console.log(countriesWithSixLetters);
countriesWithMoreThanSixLetters = countries.filter(
  (country) => country.length == 6 || country.length > 6
);
console.log(countriesWithMoreThanSixLetters);
// pricesWithValues = products.filter((product) => products.price == true);
// console.log(pricesWithValues)
const filteredProducts = products.filter(product => Boolean(product.price));
console.log(filteredProducts);

function getStringLists(array) {
  return array.filter(item => typeof item === 'string');
}
const mixedArray = [1, 'hello', true, 'world', 42, 'foo', 'bar'];
const stringArray = getStringLists(mixedArray);
console.log(stringArray); // ['hello', 'world', 'foo', 'bar']

const digits = [1, 2, 3, 4, 5]
const sum1 = digits.reduce((acc, cur) => acc + cur, 1)

console.log(sum)