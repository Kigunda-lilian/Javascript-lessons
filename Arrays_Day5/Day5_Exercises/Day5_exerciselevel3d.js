//let countries = ['USA', 'Canada', 'Mexico', 'France', 'Spain', 'Germany'];

let firstHalf;
let secondHalf;

if (countries.length % 2 === 0) {
  firstHalf = countries.slice(0, countries.length / 2);
  secondHalf = countries.slice(countries.length / 2);
} else {
  firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
  secondHalf = countries.slice(Math.ceil(countries.length / 2));
}

console.log(firstHalf);
console.log(secondHalf);
