const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}

const averageAge = sum / ages.length;

ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

const minDifference = Math.abs(minAge - averageAge);
const maxDifference = Math.abs(maxAge - averageAge);

console.log(`Difference between minimum and average: ${minDifference}`);
console.log(`Difference between maximum and average: ${maxDifference}`);

// In this code, the average age is calculated as described in a previous answer. The ages array is sorted in ascending order, and the minimum and maximum ages are found as described in a previous answer. The difference between the minimum age and the average age, and the difference between the maximum age and the average age are calculated and the results are stored in the minDifference and maxDifference variables, respectively. The absolute value of these differences is calculated using the Math.abs() method and the results are logged to the console.

const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan'];

let middleCountry;

if (countries.length % 2 === 0) {
  middleCountry = countries.slice(countries.length / 2 - 1, countries.length / 2 + 1);
} else {
  middleCountry = countries[Math.floor(countries.length / 2)];
}

console.log(`Middle country(ies): ${middleCountry}`);

// In this code, the length of the countries array is first checked to see if it's even or odd. If the length is even, the middle two countries are found by slicing the countries array from the middle index minus 1 to the middle index plus 1, and the result is stored in the middleCountry variable as an array. If the length is odd, the middle country is found by using the Math.floor() method to round down the division of the length of the array by 2, and the result is stored in the middleCountry variable as a single string. The result is then logged to the console.
