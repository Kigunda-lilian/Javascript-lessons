let x = 10;
let commaOPeratorPractice = (x++, x * 3);
console.log(commaOPeratorPractice);

let array1 = [23, 45, 67, 89];
let array2 = [...array1];
console.log(array2);
(function (n) {
  console.log(n * n);
})(2);

let squaredNum = (function (n) {
  return n * n;
})(10);
console.log(squaredNum);

function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + "N";
  return weight;
}
console.log("Weight of an object in Newton: ", weightOfObject(100)); // 9.81 gravity at the surface of Earth
console.log("Weight of an object in Newton: ", weightOfObject(100, 1.62));

setTimeout(function () {
  console.log("Execute later after 1 second");
}, 1000);

(function () {
  console.log("IIFE");
})();

let add = function (a, b) {
  return a + b;
};
let add2 = (a, b) => a + b;
console.log(add2(2, 3));

function fullName(firstName, lastName) {
  Name = firstName + " " + lastName;
  return Name;
}
console.log(fullName("Lilian", "Kanana"));

let fullName2 = (firstName, lastName) => (Name = firstName + " " + lastName);
console.log(fullName2("Liliana", "nana"));

function addNUmbers(q, w) {
  sum = q + w;
  return sum;
}
let sumOfNUmbers = (q, w) => {
  sum = q + w;
  return sum;
};

let sumOfNUmbers1 = (q, w) => (sum = q + w);

console.log(sumOfNUmbers(3, 4));
console.log(sumOfNUmbers1(3, 4));
console.log(addNUmbers(3, 4));

let areaOfCircle = (r) => Math.PI * r ** 2;
let areaOfCircle2 = (r) => Math.PI * r * r;
console.log(areaOfCircle(7));
console.log(areaOfCircle2(7));

let BMI = (weight, height) => {
  let bmi = weight / height ** 2;
  bmi < 18.5
    ? console.log("underweight")
    : bmi >= 18.5 && bmi <= 24.9
    ? console.log("Normal weight")
    : bmi >= 25 && bmi <= 29.9
    ? console.log("Overweight")
    : bmi > 30
    ? console.log("Obese")
    : console.log("Input weight and height");
  return bmi;
};
console.log(BMI(100, 2));

let maximumNumber = (...args) => {
  for (const element of args) {
    maximum = Math.max(args);
  }
  return maximum;
};
console.log(maximumNumber(34, 45, 76, 90));

function findMax(a, b, c) {
  return Math.max(a, b, c);
}
console.log(findMax(34, 65, 90));

function findMax(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
console.log(findMax(5, 10, 15)); // Output: 15
console.log(findMax(-1, -5, -10)); // Output: -1
console.log(findMax(2.5, 7.8, 4.2)); // Output: 7.8

function findMax(a, b, c) {
  let max = a; // initialize max to the first argument

  if (b > max) {
    max = b; // update max if the second argument is greater
  }

  if (c > max) {
    max = c; // update max if the third argument is greater
  }

  return max; // return the maximum value
}

console.log(findMax(5, 10, 15)); // Output: 15
console.log(findMax(-1, -5, -10)); // Output: -1
console.log(findMax(2.5, 7.8, 4.2)); // Output: 7.8

function printArray() {
  for (single of arguments) {
    console.log(single);
  }
}
printArray("you", "I", "him", "her");

let printArray3 = (...args) => {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
};

printArray3("pa", "pe", "pi", "po", "pu");

function swapValues(x, y) {
  p = x;
  x = y;
  y = p;
  console.log("the value of X is : " + x + " " + "and the value of y is :" + y);
}
swapValues(9, 0);

function evensAndOdds(num) {
  let evens = 0;
  let odds = 0;

  // Convert the number to a string so we can loop through its digits
  let numString = num.toString();

  // Loop through each digit in the string
  for (let i = 0; i < numString.length; i++) {
    let digit = parseInt(numString[i]);

    // Increment the evens or odds count depending on whether the digit is even or odd
    if (digit % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }

  // Return an object with the evens and odds counts
  return {
    evens: evens,
    odds: odds,
  };
}

// This function initializes two variables, evens and odds, to zero. It then converts the input number to a string and loops through each digit in the string. For each digit, it checks whether it is even or odd using the modulus operator (%), and increments the evens or odds count accordingly.

// Finally, the function returns an object with the evens and odds counts.

// You can use this function to count the number of evens and odds in any positive integer, like so:

console.log(evensAndOdds(123456)); // Output: { evens: 3, odds: 3 }
console.log(evensAndOdds(123)); // Output: { evens: 1, odds: 2 }
console.log(evensAndOdds(2468)); // Output: { evens: 4, odds: 0 }

let sumOfArguments = (...args) => {
  sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += parseInt(args[i]);
  }
    return sum
};
console.log(sumOfArguments(1,2,3,4,5))