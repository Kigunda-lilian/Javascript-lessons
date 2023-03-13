// Getting Element
// We can access already created element or elements using JavaScript. To access or get elements we use different methods. The code below has four h1 elements. Let us see the different methods to access the h1 elements.

// Getting elements by tag name
// getElementsByTagName():takes a tag name as a string parameter and this method returns an HTMLCollection object. An HTMLCollection is an array like object of HTML elements. The length property provides the size of the collection. Whenever we use this method we access the individual elements using index or after loop through each individual items. An HTMLCollection does not support all array methods therefore we should use regular for loop instead of forEach.

// syntax
// document.getElementsByTagName('tagname')

const allTitles = document.getElementsByTagName("h1");

console.log(allTitles); //HTMLCollections
console.log(allTitles.length); // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]); // prints each elements in the HTMLCollection
}

// Getting elements by class name
// getElementsByClassName() method returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements. The length property provides the size of the collection. It is possible to loop through all the HTMLCollection elements. See the example below

//syntax
document.getElementsByClassName("classname");

const allTitles = document.getElementsByClassName("title");

console.log(allTitles); //HTMLCollections
console.log(allTitles.length); // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]); // prints each elements in the HTMLCollection
}

// Getting an element by id
// getElementsById() targets a single HTML element. We pass the id without # as an argument.
//syntax
document.getElementById("id");

let firstTitle = document.getElementById("first-title");
console.log(firstTitle); // <h1>First Title</h1>

// Getting elements by using querySelector methods
// The document.querySelector method can select an HTML or HTML elements by tag name, by id or by class name.

// querySelector: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.

let firstTitle = document.querySelector("h1"); // select the first available h1 element
let firstTitle = document.querySelector("#first-title"); // select id with first-title
let firstTitle = document.querySelector(".title"); // select the first available h1 element with class title

// querySelectorAll: can be used to select html element by its tag name or class. It return a nodeList which is an array like object which support array methods. We can use for loop or forEach to loop through each nodeList elements.

const allTitles = document.querySelectorAll("h1");

console.log(allTitles.length); // 4
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]);
}

allTitles.forEach((title) => console.log(title));
const allTitles = document.querySelectorAll(".title"); // the same goes for selecting using class

// Adding attribute
// An attribute is added in the opening tag of HTML which gives additional information about the element. Common HTML attributes: id, class, src, style, href,disabled, title, alt. Lets add id and class for the fourth title.

const titles = document.querySelectorAll("h1");
titles[3].className = "title";
titles[3].id = "fourth-title";

// Adding attribute using setAttribute
// The setAttribute() method set any html attribute. It takes two parameters the type of the attribute and the name of the attribute. Let's add class and id attribute for the fourth title.

const titles = document.querySelectorAll("h1");
titles[3].setAttribute("class", "title");
titles[3].setAttribute("id", "fourth-title");

// Adding attribute without setAttribute
// We can use normal object setting method to set an attribute but this can not work for all elements. Some attributes are DOM object property and they can be set directly. For instance id and class

//another way to setting an attribute
titles[3].className = "title";
titles[3].id = "fourth-title";

// Adding class using classList
// The class list method is a good method to append additional class. It does not override the original class if a class exists rather it adds additional class for the element.
//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.add("title", "header-title");

// Removing class using remove
// Similar to adding we can also remove class from an element. We can remove a specific class from an element.

//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.remove("title", "header-title");

// Adding Text to HTML element
// An HTML is a build block of an opening tag, a closing tag and a text content. We can add a text content using the property textContent or *innerHTML.

const titles = document.querySelectorAll("h1");
titles[3].textContent = "Fourth Title";

// Adding Text Content using innerHTML
// Most people get confused between textContent and innerHTML. textContent is meant to add text to an HTML element, however innerHTML can add a text or HTML element or elements as a child.

// Text Content
// We assign textContent HTML object property to a text

const titles = document.querySelectorAll("h1");
titles[3].textContent = "Fourth Title";

// Inner HTML
// We use innerHTML property when we like to replace or a completely new children content to a parent element. It value we assign is going to be a string of HTML elements.

// Adding style
// Adding Style Color
// Let us add some style to our titles. If the element has even index we give it green color else red.

const titles = document.querySelectorAll("h1");
titles.forEach((title, i) => {
  title.style.fontSize = "24px"; // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = "green";
  } else {
    title.style.color = "red";
  }
});

// Adding Style Background Color
// Let us add some style to our titles. If the element has even index we give it green color else red.

const titles = document.querySelectorAll("h1");
titles.forEach((title, i) => {
  title.style.fontSize = "24px"; // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.backgroundColor = "green";
  } else {
    title.style.backgroundColor = "red";
  }
});


// Adding Style Font Size
// Let us add some style to our titles. If the element has even index we give it 20px else 30px

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.fontSize = '20px'
  } else {
    title.style.fontSize = '30px'
  }
})

// As you have notice, the properties of css when we use it in JavaScript is going to be a camelCase. The following CSS properties change from background-color to backgroundColor, font-size to fontSize, font-family to fontFamily, margin-bottom to marginBottom.