let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let pattern = /,/g;
let text2 = text.replace(pattern, "");
console.log(text2);
let words = text2.split(" ");
console.log(words);
console.log(words.length);

let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart.unshift("Meat"));
console.log(shoppingCart);
console.log(shoppingCart.push("Sugar"));
console.log(shoppingCart);
console.log(shoppingCart.splice(4, 1));
console.log(shoppingCart);
console.log(shoppingCart.splice(3, 1, "Green Tea"));
console.log(shoppingCart);

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
console.log(fullStack.length);
