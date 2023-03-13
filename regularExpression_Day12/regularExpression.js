// Creating a pattern with RegExp Constructor
// Declaring regular expression without global flag and case insensitive flag.

// without flag
let pattern = "love";
let regEx = new RegExp(pattern);

// Declaring regular expression with global flag and case insensitive flag.

let pattern1 = "love";
let flag = "gi";
let regEx1 = new RegExp(pattern1, flag);

// Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor

let regEx3 = new RegExp("love", "gi");

// Creating a pattern without RegExp Constructor
// Declaring regular expression with global flag and case insensitive flag.

let regEx4 = /love/gi;

// RegExpp Object Methods
// Let see some of RegExp methods

// Testing for a match
// test():Tests for a match in a string. It returns true or false.

const str = "I love JavaScript";
const pattern2 = /love/;
const result = pattern2.test(str);
console.log(result);

// Array containing all of the match
// match():Returns an array containing all of the matches, including capturing groups, or null if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group.

const str2 = "I love JavaScript";
const pattern3 = /love/;
const result2 = str.match(pattern3);
console.log(result2);

const str3 = "I love love Javascript";
const pattern4 = /love/gi;
const result7 = str3.match(pattern4);
console.log(result7);

// search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

const str4 = "I love JavaScript";
const pattern8 = /love/g;
const result5 = str.search(pattern8);
console.log(result5);

// Replacing a substring
// replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

const txt =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";

matchReplaced = txt.replace(/Python|python/, "JavaScript");
console.log(matchReplaced);

const txt2 =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";

matchReplaced = txt2.replace(/Python|python/g, "JavaScript");
console.log(matchReplaced);

const txt3 =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";

matchReplaced = txt3.replace(/Python/gi, "JavaScript");
console.log(matchReplaced);

const txt4 =
  "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";

matches = txt4.replace(/%/g, "");
console.log(matches);

// Let's use example to clarify the above meta characters

// Square Bracket
// Let's use square bracket to include lower and upper case

const pattern0 = "[Aa]pple"; // this square bracket mean either A or a
const txt7 =
  "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. ";
const matches1 = txt7.match(pattern0);

console.log(matches1);

const pattern9 = /[Aa]pple/g; // this square bracket mean either A or a
const txt6 =
  "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. ";
const matches3 = txt6.match(pattern9);

console.log(matches3);

// If we want to look for the banana, we write the pattern as follows:

const pattern5 = /[Aa]pple|[Bb]anana/g; // this square bracket mean either A or a
const txt8 =
  "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.";
const matches4 = txt8.match(pattern5);

console.log(matches4);

// Escape character(\) in RegExp
const patternn = /\d/g; // d is a special character which means digits
const txtt = "This regular expression example was made in January 12,  2020.";
const matchess = txtt.match(patternn);

console.log(matchess); // ["1", "2", "2", "0", "2", "0"], this is not what we want

// One or more times(+)
const patternn1 = /\d+/g; // d is a special character which means digits
const txtt1 = "This regular expression example was made in January 12,  2020.";
const matchess1 = txtt1.match(patternn1);
console.log(matchess1); // ["12", "2020"], this is not what we want

// Period(.)
const patternn3 = /[a]./g; // this square bracket means a and . means any character except new line
const txtt3 = "Apple and banana are fruits";
const matchess3 = txtt3.match(patternn3);

console.log(matchess3); // ["an", "an", "an", "a ", "ar"]

const patternn4 = /[a].+/g; // . any character, + any character one or more times
const txtt4 = "Apple and banana are fruits";
const matchess4 = txtt4.match(patternn4);

console.log(matchess4); // ['and banana are fruits']

// Zero or more times(*)
// Zero or many times. The pattern could may not occur or it can occur many times.

const patternn5 = /[a].*/g; //. any character, + any character one or more times
const txtt5 = "Apple and banana are fruits";
const matchess5 = txtt5.match(patternn5);

console.log(matchess5); // ['and banana are fruits']

// Zero or one times(?)
// Zero or one times. The pattern could may not occur or it may occur once

const txtt6 =
  "I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.";
const patternn6 = /[Ee]-?mail/g; // ? means optional
matchess6 = txtt6.match(patternn6);

console.log(matchess6); // ["e-mail", "email", "Email", "E-mail"]

// Quantifier in RegExp
// We can specify the length of the substring we look for in a text, using a curly bracket. Lets imagine, we are interested in substring that their length are 4 characters

const txtt7 = "This regular expression example was made in December 6,  2019.";
const patternn7 = /\d{4}/g; // exactly four times
const matchess7 = txtt7.match(patternn7);
console.log(matchess7); // ['2019']

const txtt8 = "This regular expression example was made in December 6,  2019.";
const patternn8 = /\d{1,4}/g; // 1 to 4
const matchess8 = txtt8.match(patternn8);
console.log(matchess8); // ['6', '2019']

// Cart ^
// Starts with

const txtt9 = "This regular expression example was made in December 6,  2019.";
const patternn9 = /^This/; // ^ means starts with
const matchess9 = txtt9.match(patternn9);
console.log(matchess9); // ['This']

const txtt0 = "This regular expression example was made in December 6,  2019.";
const patternn0 = /[^A-Za-z,. ]+/g; // ^ in set character means negation, not A to Z, not a to z, no space, no coma no period
const matchess0 = txtt0.match(patternn0);
console.log(matchess0); // ["6", "2019"]

// Exact match
// It should have ^ starting and $ which is an end.

let patternnn = /^[A-Z][a-z]{3,12}$/;
let nameee = "Asabeneh";
let resulttt = patternnn.test(nameee);

console.log(resulttt); // true
