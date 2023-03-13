console.log(
  "The quote 'There\tis\tno\texercise\tbetter\tfor\tthe\theart\tthan\treaching\tdown\tand\tlifting\tpeople\tup.' by\tJohn\tHolmes\tteaches\tus\tto\thelp\tone\tanother."
);
console.log(
  "\"Love\tis\tnot\tpatronizing\tand\tcharity\tisn't\tabout\tpity,\tit\tis\tabout\tlove.\t Charity\t and\t love\t are\t the\t same\t -- with\t charity\t you\t give\t love,\t so\t don't \tjust\t give\t money\t but \treach \tout \tyour\t hand\t instead.\""
);
let string2 = "10";
console.log(typeof string2);
console.log(10 === "10");
console.log(10 === string2);
let num1 = parseInt(string2);
let num2 = Number(string2);
let num3 = +string2;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(parseFloat("9.8") == 10);
console.log(parseFloat("9.8") == 9.8);
console.log(parseInt("9.8") === 10);

let p = "Python";
let j = "jargon";

if (p.includes("on") && j.includes("on")) {
  console.log("Both strings have 'on'");
} else {
  console.log("Both strings do not have 'on'");
}

string3 = "I hope this course is not full of jargon.";
console.log(string3.search("jargon"));

let randomNum = Math.random();
let numBtnZeroAnsHundred = randomNum * 101;
console.log(numBtnZeroAnsHundred);

let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);
// In this code, Math.random() generates a random number between 0 (inclusive) and 1 (exclusive). Multiplying this by 101 gives us a range between 0 and 100. The Math.floor method then rounds the result down to the nearest integer, ensuring that the final result is an integer between 0 and 100, inclusive.

for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= 5; j++) {
    line += `${Math.pow(i, j)} `;
  }
  console.log(line);
}
// In this code, two nested for loops are used to generate each line of the pattern. The outer loop, i, iterates from 1 to 5 and represents the first number of each line. The inner loop, j, iterates from 1 to 5 and represents the exponent. The value of Math.pow(i, j) is calculated and concatenated to the line string, separated by a space. After each iteration of the inner loop, the line string is logged to the console using console.log().

let randomNumber2 = Math.floor(Math.random() * 51) + 50;
console.log(randomNumber2);

// In this code, Math.random() generates a random number between 0 (inclusive) and 1 (exclusive). Multiplying this by 51 gives us a range between 0 and 50. Adding 50 to this result gives us a range between 50 and 100. The Math.floor method then rounds the result down to the nearest integer, ensuring that the final result is an integer between 50 and 100, inclusive.
let randomNumber3 = Math.floor(Math.random() * 256);
console.log(randomNumber3);

let word = "Javascript";
let randomIndex = Math.floor(Math.random() * word.length);
let randomCharacter = word[randomIndex];
console.log(randomCharacter);
// In this code, the string "JavaScript" is assigned to the str variable. A random number between 0 and the length of the string (inclusive) is generated using Math.random() and Math.floor, and is assigned to the randomIndex variable. The character at the randomly generated index is then accessed using square bracket notation and assigned to the randomCharacter variable. Finally, the randomCharacter is logged to the console.

let text2 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(text2.substr(30, 50));

let sentence = "You cannot end a sentence with because because because is a conjunction";
let phrase = "because because because";
let startIndex = sentence.indexOf(phrase);
let endIndex = startIndex + phrase.length;
let slicedPhrase = sentence.substr(startIndex, phrase.length);
console.log(slicedPhrase);


// In this code, the sentence is assigned to the sentence variable and the phrase "because because because" is assigned to the phrase variable. The indexOf method is used to find the starting index of the phrase in the sentence and is assigned to the startIndex variable. The endIndex is then calculated as the starting index plus the length of the phrase. The substr method is used to extract the desired string from the sentence by specifying the starting index and the length of the substring. The resulting sliced phrase is then assigned to the slicedPhrase variable and logged to the console.

let statement = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let pattern2 = /love/gi 
console.log(statement.match(pattern2))

