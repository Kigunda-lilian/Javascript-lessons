// let evensAndOdds = (int) => {
//   let evens = 0;
//   let odds = 0;
//     for (let i = 0; i < int.length; i++) {
//         if (int[i] % 2 == 0) {
//             evens += int[i];
//         } else if(int[i] % 2 !== 0){
//         odds += int[i];
//     }
//   }
//   return evens
// };

// console.log(evensAndOdds(2489))

// let evensAndOdds = (int) => {
//   let evens = [];
//   let odds = [];
//   for (let i = 0; i <= int.length; i++) {
//     if (int[i] % 2 == 0) {
//       evens.push(int[i]);
//     } else if (int[i] % 2 !== 0) {
//       odds.push(int[i]);
//     }
//     console.log("Not valid");
//   }
//   return evens.length, odds.length;
// };

// console.log(evensAndOdds(2489));

function randomHexaNumberGenerator() {
  // Define the range of possible hexadecimal values
  const hexDigits = "0123456789abcdef";
  // Generate a random 6-digit hexadecimal number
  const hexNumber = Array.from(
    { length: 6 },
    () => hexDigits[Math.floor(Math.random() * hexDigits.length)]
  ).join("");
  // Return the hexadecimal number with a "#" prefix
  return "#" + hexNumber;
}

console.log(randomHexaNumberGenerator()); // prints something like "#ee33df"
// This function generates a random hexadecimal number with a "#" prefix, and it returns the result as a string. The function uses the Math.random() function to generate a random number between 0 and 1, and it uses the Math.floor() function to round the number down to the nearest integer. The function then uses the hexDigits string to select random hexadecimal digits and concatenate them into a 6-digit hexadecimal number, which is then prefixed with a "#" symbol and returned as the result of the function.

function randomMacAddress() {
  // Define the range of possible hexadecimal values for a MAC address
  const hexDigits = "0123456789abcdef";
  // Choose six random values from the range to create the MAC address
  const macAddress = Array.from({ length: 6 }, () =>
    Array.from(
      { length: 2 },
      () => hexDigits[Math.floor(Math.random() * hexDigits.length)]
    ).join("")
  ).join(":");
  return macAddress;
}

console.log(randomMacAddress()); // prints something like "5d:9f:34:68:22:aa"

function randomUserIp() {
  // Define the range of possible IP address values
  const ipValues = Array.from({ length: 256 }, (_, i) => i);
  // Choose four random values from the range to create the IP address
  const ipAddress = ipValues
    .map(() => Math.floor(Math.random() * ipValues.length))
    .slice(0, 4)
    .join(".");
  return ipAddress;
}

console.log(randomUserIp()); // prints something like "221.39.228.199"
