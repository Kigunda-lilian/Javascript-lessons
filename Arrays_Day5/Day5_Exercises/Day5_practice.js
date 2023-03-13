let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.splice(1, 2, "#2", "#3", 10));
console.log(numbers);

let emptyArray = [];
let emptyArray2 = Array();
let fiveElementsArray = [5];
console.log(fiveElementsArray);
let filledArray = fiveElementsArray.fill(3);
console.log(filledArray);
let filledArray2 = [3].fill("nash");
console.log(filledArray2);

let filledArray3 = Array(5).fill("nash");
console.log(filledArray3);

let array2 = ["t", "y", "u", "o"];
console.log(array2.length);
console.log(array2[0]);
console.log(array2.slice());
console.log(array2.slice(0));
console.log(array2.slice(0, array2.length));
let companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(companies.toString());
console.log(companies[3].toUpperCase());

let joined = companies.join(",");
console.log(joined);
console.log(companies.concat("are big IT companies"));

companies.includes("Amazon")
  ? console.log("Amazon exists")
  : console.log("The company iis not found");

let sorted = companies.sort();
console.log(sorted);
console.log(companies.reverse());
console.log(companies.slice(0, 3));
console.log(companies);
console.log(companies.push("companyX"));
console.log(companies.pop());
console.log(companies.shift());
console.log(companies.unshift("companyW"));
console.log(companies);
console.log(companies.length);
