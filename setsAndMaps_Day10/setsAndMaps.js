// Creating an empty set
const companies = new Set();
console.log(companies);
const languages1 = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLanguages = new Set(languages1);
console.log(setOfLanguages);

// Set is an iterable object and we can iterate through each elements.

for (const language of setOfLanguages) {
  console.log(language);
}

// Adding an element to a set
const companiess = new Set(); // creating an empty set
console.log(companiess.size); // 0

companiess.add("Google"); // add element to the set
companiess.add("Facebook");
companiess.add("Amazon");
companiess.add("Oracle");
companiess.add("Microsoft");

console.log(companiess.size); // 5 elements in the set
console.log(companiess);

// We can also use loop to add element to a set.
const companies0 = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"];
setOfCompanies = new Set();
for (const company of companies0) {
  setOfCompanies.add(company);
}

// Deleting an element a set
// We can delete an element from a set using a delete method.

console.log(companiess.delete("Google"));
console.log(companiess.size); // 4 elements left in the set

// Checking an element in the set
// The has method can help to know if a certain element exists in a set.
console.log(companiess.has("Apple")); // false
console.log(companiess.has("Facebook")); // true

// Clearing the set
// It removes all the elements from a set.
companiess.clear();

console.log(companiess);

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];
const langSet = new Set(languages);
console.log(langSet); // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size); // 4

const counts = [];
const count = {};

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l);
  console.log(filteredLang); // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length });
}
console.log(counts);

// Other use case of set. For instance to count unique item in an array.

const numbers9 = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers9);

console.log(setOfNumbers);

// Union of sets
// To find a union to two sets can be achieved using spread operator. Lets find the union of set A and set B (A U B)

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C);

// Intersection of sets
// To find an intersection of two sets can be achieved using filter. Lets find the intersection of set A and set B (A ∩ B)

let a1 = [1, 2, 3, 4, 5];
let b1 = [3, 4, 5, 6];

let A1 = new Set(a1);
let B1 = new Set(b1);

let c1 = a1.filter((num) => B1.has(num));
let C1 = new Set(c1);

console.log(C1);

// Difference of sets
// To find an the difference between two sets can be achieved using filter. Lets find the different of set A and set B (A \ B)

let a2 = [1, 2, 3, 4, 5];
let b2 = [3, 4, 5, 6];

let A2 = new Set(a2);
let B2 = new Set(b2);

let c2 = a2.filter((num) => !B2.has(num));
let C2 = new Set(c2);

console.log(C2);

// Map
// Creating an empty Map
const map = new Map();
console.log(map);

// Creating an Map from array

countries7 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const map1 = new Map(countries7);
console.log(map1);
console.log(map1.size);

// Adding values to the Map
const countriesMap = new Map();
console.log(countriesMap.size); // 0
countriesMap.set("Finland", "Helsinki");
countriesMap.set("Sweden", "Stockholm");
countriesMap.set("Norway", "Oslo");
console.log(countriesMap);
console.log(countriesMap.size);

// Getting a value from Map
console.log(countriesMap.get("Finland"));

// Checking key in Map
// Check if a key exist in a map using has method. It returns true or false.
console.log(countriesMap.has("Finland"));

// Getting all values from map using loop

for (const country of countriesMap) {
  console.log(country);
}

for (const [country, city] of countriesMap) {
  console.log(country, city);
}
