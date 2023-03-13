const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits1 = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// Print the array and its length

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Fruits:", fruits1);
console.log("Number of fruits:", fruits1.length);

console.log("Vegetables:", vegetables);
console.log("Number of vegetables:", vegetables.length);

console.log("Animal products:", animalProducts);
console.log("Number of animal products:", animalProducts.length);

console.log("Web technologies:", webTechs);
console.log("Number of web technologies:", webTechs.length);

console.log("Countries:", countries);
console.log("Number of countries:", countries.length);

// Array can have items of different data types

const arr = [
  "Asabeneh",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
]; // arr containing different data types
console.log(arr);

// Creating an array using split
// we can split a string at different positions, and we can change to an array. Let us see the examples below.

let js = "JavaScript";
const charsInJavaScript = js.split("");

console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");

console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");

console.log(words);
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

// Accessing array items using index
// We access each element in an array using their index. An array index starts from 0. The picture below clearly shows the index of each element in the array.

const fruits = ["banana", "orange", "mango", "lemon"];
let firstFruit = fruits[0]; // we are accessing the first item using its index

console.log(firstFruit); // banana

secondFruit = fruits[1];
console.log(secondFruit); // orange

let lastFruit = fruits[3];
console.log(lastFruit); // lemon
// Last index can be calculated as follows

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];

console.log(lastFruit); // lemon
console.log(fruits.length);
console.log(lastIndex);

// Modifying array element
// An array is mutable(modifiable). Once an array is created, we can modify the contents of the array elements.

const numbers2 = [1, 2, 3, 4, 5];
numbers2[0] = 10; // changing 1 at index 0 to 10
numbers2[1] = 20; // changing  2 at index 1 to 20

console.log(numbers2); // [10, 20, 3, 4, 5]

const countries1 = [
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

countries1[0] = "Afghanistan"; // Replacing Albania by Afghanistan
let lastIndex1 = countries.length - 1;
countries1[lastIndex] = "Korea"; // Replacing Kenya by Korea

console.log(countries1);

// Methods to manipulate array
// There are different methods to manipulate an array. These are some of the available methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

// Array Constructor
// Array:To create an array.

const array = Array(); // creates an an empty array
console.log(array);

const eightEmptyValues = Array(8); // it creates eight empty values
console.log(eightEmptyValues); // [empty x 8]

// Creating static values with fill
// fill: Fill all the array elements with a static value

const ar = Array(); // creates an an empty array
console.log(ar);

const eightXvalues = Array(8).fill("X"); // it creates eight element values filled with 'X'
console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0); // it creates eight element values filled with '0'
console.log(eight0values); // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4); // it creates 4 element values filled with '4'
console.log(four4values); // [4, 4, 4, 4]

// Concatenating array using concat
// concat:To concatenate two arrays.

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList); // [1, 2, 3, 4, 5, 6]

const fruits3 = ["banana", "orange", "mango", "lemon"]; // array of fruits
const vegetables3 = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of vegetables
const fruitsAndVegetables = fruits3.concat(vegetables3); // concatenate the two arrays

console.log(fruitsAndVegetables);
console.log(fruits.concat(vegetables));

// Getting array length
// Length:To know the size of the array

const numbers9 = [1, 2, 3, 4, 5];
console.log(numbers9.length); // -> 5 is the size of the array

// Getting index an element in arr array
// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.

const numbers6 = [1, 2, 3, 4, 5];

console.log(numbers6.indexOf(5)); // -> 4
console.log(numbers6.indexOf(0)); // -> -1
console.log(numbers6.indexOf(1)); // -> 0
console.log(numbers6.indexOf(6)); // -> -1

// Check an element if it exist in an array.

// Check items in a list

let students = ["Lilian", "Moreen", "Faith", "Flora", "Lucy"];
let present = students.indexOf("Kibor");

if (present == -1) {
  console.log("The student is not in school");
} else {
  console.log("The student is in school");
}

present === -1
  ? console.log("The student is not in school")
  : "The student is  in school";

// let us check if a banana exist in the array

const fruits4 = ["banana", "orange", "mango", "lemon"];
let index = fruits4.indexOf("banana"); // 0

if (index === -1) {
  console.log("This fruit does not exist in the array");
} else {
  console.log("This fruit does exist in the array");
}
// This fruit does exist in the array

// we can use also ternary here
index === -1
  ? console.log("This fruit does not exist in the array")
  : console.log("This fruit does exist in the array");

// let us check if a avocado exist in the array
let indexOfAvocado = fruits.indexOf("avocado"); // -1, if the element not found index is -1
if (indexOfAvocado === -1) {
  console.log("This fruit does not exist in the array");
} else {
  console.log("This fruit does exist in the array");
}
// This fruit does not exist in the array

// Getting last index of an element in array
// lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

const numbers7 = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numbers7.lastIndexOf(2)); // 7
console.log(numbers7.lastIndexOf(0)); // -1
console.log(numbers7.lastIndexOf(1)); //  6
console.log(numbers7.lastIndexOf(4)); //  3
console.log(numbers7.lastIndexOf(6)); // -1

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

const values1 = [1, 2, 3, 4, 5];

console.log(values1.includes(5)); // true
console.log(values1.includes(0)); // false
console.log(values1.includes(1)); // true
console.log(values1.includes(6)); // false

const webTech = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies

console.log(webTech.includes("Node")); // true
console.log(webTech.includes("C")); // false

// Checking array
// Array.isArray:To check if the data type is an array

const values = [1, 2, 3, 4, 5];
console.log(Array.isArray(values)); // true

const value = 100;
console.log(Array.isArray(value)); // false

//Converting array to string
// toString:Converts array to string

const digits = [1, 2, 3, 4, 5];
console.log(digits.toString()); // 1,2,3,4,5

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook

// Joining array elements
// join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.

const numb = [1, 2, 3, 4, 5];
console.log(numb.join()); // 1,2,3,4,5

const nam = ["Asabeneh", "Mathias", "Elias", "Brook"];

console.log(nam.join()); // Asabeneh,Mathias,Elias,Brook
console.log(nam.join("")); //AsabenehMathiasEliasBrook
console.log(nam.join(" ")); //Asabeneh Mathias Elias Brook
console.log(nam.join(", ")); //Asabeneh, Mathias, Elias, Brook
console.log(names.join(" # ")); //Asabeneh # Mathias # Elias # Brook

const webTec = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies

console.log(webTec.join()); // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTec.join(" # ")); // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

// Slice array elements
// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

const dig = [1, 2, 3, 4, 5];

console.log(dig.slice()); // -> it copies all  item
console.log(dig.slice(0)); // -> it copies all  item
console.log(dig.slice(0, dig.length)); // it copies all  item
console.log(dig.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position
// Splice method in array
// Splice: It takes three parameters:Starting position, number of items to be removed and number of items to be added.

const num1 = [1, 2, 3, 4, 5];

console.log(num1.splice()); // -> remove all items
const num2 = [1, 2, 3, 4, 5];
console.log(num2.splice(0, 1)); // remove the first item
const num3 = [1, 2, 3, 4, 5, 6];
console.log(num3.splice(3, 3, 7, 8, 9)); // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

// Adding item to an array using push
// Push: adding item in the end. To add item to the end of an existing array we use the push method.

// syntax
const arrr = ["item1", "item2", "item3"];
arrr.push("new item");

console.log(arrr);
// ['item1', 'item2','item3','new item']

// Removing the end element using pop
// pop: Removing item in the end.

const num6s = [1, 2, 3, 4, 5];
num6s.pop(); // -> remove one item from the end

console.log(num6s); // -> [1,2,3,4]

//Removing an element from the beginning
// shift: Removing one array element in the beginning of the array.
const t = [1, 2, 3, 4, 5];
t.shift(); // -> remove one item from the beginning

console.log(t); // -> [2,3,4,5]
y = t.shift();
console.log(y);

// Add an element from the beginning
// unshift: Adding array element in the beginning of the array.
const s = [1, 2, 3, 4, 5];
s.unshift(0); // -> add one item from the beginning

console.log(s); // -> [0,1,2,3,4,5]

// Reversing array order
// reverse: reverse the order of an array.
const d = [1, 2, 3, 4, 5];
d.reverse(); // -> reverse array order

console.log(d); // [5, 4, 3, 2, 1]

d.reverse();
console.log(d); // [1, 2, 3, 4, 5]

// Sorting elements in array
// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

const webTek = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

webTek.sort();
console.log(webTek); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTek.reverse(); // after sorting we can reverse it
console.log(webTek); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// Array of arrays
// Array can store different data types including an array itself. Let us create an array of arrays

const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]