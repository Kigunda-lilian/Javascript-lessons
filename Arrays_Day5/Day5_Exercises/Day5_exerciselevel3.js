const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log(`Minimum age: ${minAge}`);
console.log(`Maximum age: ${maxAge}`);
//In this code, the sort method is used to sort the ages array in ascending order. The sort method takes a comparison function as an argument, which returns the difference between a and b. The minAge constant is assigned to the first element of the sorted array (at index 0), and the maxAge constant is assigned to the last element of the sorted array (at index ages.length - 1). Finally, the minimum and maximum ages are logged to the console.

ages.sort((a, b) => a - b);

let medianAge;
if (ages.length % 2 === 0) {
  medianAge = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
} else {
  medianAge = ages[Math.floor(ages.length / 2)];
}

console.log(`Median age: ${medianAge}`);

// In this code, the ages array is sorted in ascending order as in the previous answer. Then, a conditional statement checks if the length of the array is even or odd. If the length is even, the median is calculated as the average of the two middle elements (at indices ages.length / 2 - 1 and ages.length / 2). If the length is odd, the median is simply the middle element (at index Math.floor(ages.length / 2)). The median age is then logged to the console.

let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}

const averageAge = sum / ages.length;

console.log(`Average age: ${averageAge}`);
// In this code, a variable sum is initialized to 0 and is used to keep track of the total sum of the ages. A for loop iterates over the ages array and adds each element to the sum. Finally, the average age is calculated by dividing the sum by the length of the ages array, and the result is logged to the console.

