let challenge = "30 Days Of Javascript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3, 7));
console.log(challenge.substr(3, 4));
console.log(challenge.substring(3, 21));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(challenge.split());
let string = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(string.split(","));
console.log(challenge.replace("Javascript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
let sentence2 =
  "You cannot end a sentence with because because because is a conjunction";

console.log(sentence2.indexOf("because"));
console.log(sentence2.lastIndexOf("because"));
console.log(sentence2.search("because"));
console.log(challenge.trim());
console.log(challenge.trim(""));
console.log(challenge.startsWith("3"));
console.log(challenge.endsWith("t"));
string1 = "30 Days of";
console.log(string1.concat("Javascript"));
console.log(challenge.repeat(2));

text1 = "30 Days of Javascript";
pattern1 = /a/gi;
console.log(text1.match(pattern1));
