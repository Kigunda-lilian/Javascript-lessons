const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

const countriesWithLand = countries.filter(country => country.endsWith('land'));

if (countriesWithLand.length > 0) {
  console.log(countriesWithLand); // prints the array of countries containing 'land'
} else {
  console.log('All these countries are without land'); // prints the message if no country contains 'land'
}

// const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

const countriesEndsWithIa = countries.filter(country => country.endsWith('ia'));

if (countriesEndsWithIa.length > 0) {
  console.log(countriesEndsWithIa); // prints the array of countries ending with 'ia'
} else {
  console.log('These are countries ends without ia'); // prints the message if no country ends with 'ia'
}

//The filter() method is used to create a new array with all elements that pass the test implemented by the provided function. In this case, the function checks if the country name ends with the string 'ia'. If the resulting array has at least one element, it means there is at least one country ending with 'ia', so we print that array. Otherwise, we print the message indicating that no country ends with 'ia'. 

// const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

const longestCountry = countries.reduce((a, b) => a.length > b.length ? a : b);

console.log(longestCountry); // prints the country with the longest name


// The reduce() method is used to reduce an array to a single value. In this case, we are reducing the array of countries to a single value, which is the country with the longest name. The callback function passed to the reduce() method takes two parameters, a and b, which represent the accumulated value and the current value being processed, respectively. The function compares the length of the two country names and returns the longer one, which is used as the accumulated value in the next iteration. After all elements have been processed, the accumulated value is the country with the longest name, which we print to the console.

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

const mernAcronym = mernStack.reduce((acronym, word) => acronym + word[0], '');

console.log(mernAcronym); // prints the MERN acronym


// The reduce() method is used to reduce the array mernStack to a single value, which is the MERN acronym. The callback function passed to the reduce() method takes two parameters, acronym and word, which represent the accumulated value and the current value being processed, respectively. The function adds the first character of the current word to the accumulated value, which is initialized as an empty string. After all elements have been processed, the accumulated value is the MERN acronym, which we print to the console.




