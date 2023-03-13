// Destructing Arrays
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;

console.log(numOne, numTwo, numThree);

const names = ["Asabeneh", "Brook", "David", "John"];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;

console.log(e, pi, gravity, bodyTemp, boilingTemp);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;

console.log(frontEnd);
console.log(backEnd);

//If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index

const numbers2 = [1, 2, 3];
let [numOnee, , numThreee] = numbers2; //2 is omitted

console.log(numOnee, numThreee);

const names1 = ["Asabeneh", "Brook", "David", "John"];
let [, secondPerson1, , fourthPerson1] = names1; // first and third person is omitted

console.log(secondPerson1, fourthPerson1);

// We can use default value in case the value of array for that index is undefined:

const names3 = [undefined, "Brook", "David"];
let [
  firstPerson2 = "Asabeneh",
  secondPerson2,
  thirdPerson2,
  fourthPerson2 = "John",
] = names3;

console.log(firstPerson2, secondPerson2, thirdPerson2, fourthPerson2);

// We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3);
console.log(rest);

// Destructuring during iteration
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

for (const [country, city] of countries) {
  console.log(country, city);
}

const fullStack2 = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (const [first, second, third] of fullStack) {
  console.log(first, second, third);
}

// Destructuring Object
// When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object. See the example below.

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width, height, area, perimeter } = rectangle;

console.log(width, height, area, perimeter);

// Renaming during structuring
const rectangle2 = {
  width: 20,
  height: 10,
  area: 200,
};
let { width: w, height: h, area: a, perimeter: p } = rectangle;

console.log(w, h, a, p);

// If the key is not found in the object the variable will be assigned to undefined. In case, the key is not in the object we can give a default value during declaration. See the example.
const rectangle4 = {
  width1: 20,
  height1: 10,
  area1: 200,
};
let { width1, height1, area1, perimeter1 = 60 } = rectangle4;

console.log(width1, height1, area1, perimeter1); //20 10 200 60
//Lets modify the object:width to 30 and perimeter to 80

const rectangle5 = {
  width2: 30,
  height2: 10,
  area2: 200,
  perimeter2: 80,
};
let { width2, height2, area2, perimeter2 = 60 } = rectangle5;
console.log(width2, height2, area2, perimeter2); //30 10 200 80

// Object parameter without destructuring
// Without destructuring
const rect = {
  width: 20,
  height: 10,
};
const calculatePerimeter = (rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};

console.log(calculatePerimeter(rect)); // 60
//with destructuring

//Another Example
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};
// Lets create a function which give information about the person object without destructuring

const getPersonInfo = (obj) => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(", ");
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(", ");

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${
    obj.country
  }. He is  ${obj.age} years old. He is an ${
    obj.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};

console.log(getPersonInfo(person));

// Object parameter with destructuring

const calculatePerimeter1 = ({ width, height }) => {
  return 2 * (width + height);
};

console.log(calculatePerimeter1(rect)); // 60

// Lets create a function which give information about the person object with destructuring
const getPersonInfo1 = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages,
}) => {
  const formattedSkills = skills.slice(0, -1).join(", ");
  const formattedLanguages = languages.slice(0, -1).join(", ");

  personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};
console.log(getPersonInfo1(person));
/*
  Asabeneh Yetayeh lives in Finland. He is  200 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
  */

// Destructuring object during iteration
const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}

const numss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1a, num2a, num3a, ...rest1] = numss;

console.log(num1a, num2a, num3a);
console.log(rest1);

const countries4 = [
  "Germany",
  "France",
  "Belgium",
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];

let [gem, fra, , ...nordicCountries] = countries4;

console.log(gem);
console.log(fra);
console.log(nordicCountries);

// Spread operator to copy array
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);

const frontEnd1 = ["HTML", "CSS", "JS", "React"];
const backEnd1 = ["Node", "Express", "MongoDB"];
const fullStack1 = [...frontEnd, ...backEnd];

console.log(fullStack1);

// Spread operator to copy object
// We can copy an object using a spread operator
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

const copiedUser = { ...user };
console.log(copiedUser);

// Modifying or changing the object while copying
const user2 = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

const copiedUser2 = { ...user2, title: "instructor" };
console.log(copiedUser2);

// Spread operator with arrow function
// Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator. If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.

const sumAllNums = (...args) => {
  console.log(args);
};

sumAllNums(1, 2, 3, 4, 5);

const sumAllNums2 = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};

console.log(sumAllNums2(1, 2, 3, 4, 5));
