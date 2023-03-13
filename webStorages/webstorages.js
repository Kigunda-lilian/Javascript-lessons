// Setting item to the localStorage
// When we set data to be stored in a localStorage, it will be stored as a string. If we are storing an array or an object, we should stringify it first to keep the format unless otherwise we lose the array structure or the object structure of the original data.

// We store data in the localStorage using the localStorage.setItem method.

//syntax
localStorage.setItem("key", "value");

// Storing string in a localStorage
localStorage.setItem("firstName", "Asabeneh"); // since the value is string we do not stringify it
console.log(localStorage);
// Storing number in a local storage
localStorage.setItem("age", 200);
console.log(localStorage);

// Storing an array in a localStorage. If we are storing an array, an object or object array, we should stringify the object first. See the example below.
const skills = ["HTML", "CSS", "JS", "React"];
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4);
localStorage.setItem("skills", skillsJSON);
console.log(localStorage);

let skills = [
  { tech: "HTML", level: 10 },
  { tech: "CSS", level: 9 },
  { tech: "JS", level: 8 },
  { tech: "React", level: 9 },
  { tech: "Redux", level: 10 },
  { tech: "Node", level: 8 },
  { tech: "MongoDB", level: 8 },
];

let skillJSON = JSON.stringify(skills);
localStorage.setItem("skills", skillJSON);

// Storing an object in a localStorage. Before we storage objects to a localStorage, the object has to be stringified.
const user = {
  firstName: "Asabeneh",
  age: 250,
  skills: ["HTML", "CSS", "JS", "React"],
};

const userText = JSON.stringify(user, undefined, 4);
localStorage.setItem("user", userText);

// Getting item from localStorage
// We get data from the local storage using localStorage.getItem() method.

//syntax
localStorage.getItem("key");

let firstName = localStorage.getItem("firstName");
let age = localStorage.getItem("age");
let skills = localStorage.getItem("skills");
console.log(firstName, age, skills);

// As you can see the skill is in a string format. Let us use JSON.parse() to parse it to normal array.

let skills = localStorage.getItem("skills");
let skillsObj = JSON.parse(skills, undefined, 4);
console.log(skillsObj);

// Clearing the localStorage
// The clear method, will clear everything stored in the local storage

localStorage.clear();
