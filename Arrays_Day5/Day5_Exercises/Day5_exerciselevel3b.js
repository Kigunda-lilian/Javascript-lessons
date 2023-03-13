const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

const range = maxAge - minAge;

console.log(`Range of ages: ${range}`);
// In this code, the ages array is sorted in ascending order and the minimum and maximum ages are found as described in a previous answer. The range of the ages is then calculated by subtracting the minAge from the maxAge and the result is logged to the console.