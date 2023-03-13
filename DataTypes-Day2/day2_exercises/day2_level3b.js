let sentence = "You cannot end a sentence with because because because is a conjunction";
let word = /because/g;
let matches = sentence.match(word);
let count = matches ? matches.length : 0;
console.log(`The word "because" appears ${count} times in the sentence.`);


// In this code, the sentence is assigned to the sentence variable and a regular expression that matches the word "because" is assigned to the word variable, with the g flag to perform a global search. The match method is used to find all occurrences of the word in the sentence and the resulting array of matches is assigned to the matches variable. A ternary operator is used to assign the length of the matches array to the count variable, or 0 if matches is null. Finally, the count is logged to the console.