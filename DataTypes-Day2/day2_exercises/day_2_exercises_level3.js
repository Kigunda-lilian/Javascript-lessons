let sentence =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let word = "love";
let count = 0;
let startIndex = sentence.indexOf(word);

while (startIndex !== -1) {
  count++;
  startIndex = sentence.indexOf(word, startIndex + word.length);
}

console.log(`The word "${word}" appears ${count} times in the sentence.`);

// In this code, the sentence is assigned to the sentence variable and the word "love" is assigned to the word variable. A count of the word is initiated at 0 and assigned to the count variable. The indexOf method is used to find the starting index of the first occurrence of the word in the sentence and is assigned to the startIndex variable. A while loop is used to continuously find and count occurrences of the word until the indexOf method returns -1, indicating that the word is not found in the sentence. After each iteration, the startIndex is updated to the starting index of the next occurrence of the word by calling indexOf again with a starting index of startIndex + word.length. Finally, the count is logged to the console.
