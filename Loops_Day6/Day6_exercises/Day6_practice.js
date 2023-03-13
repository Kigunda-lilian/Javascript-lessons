for (let i = 0; i < 5; i++) {
  console.log("#".repeat(i));
}

let anArray = [];
// while (anArray.length < 5) {
//   randomNumber = Math.floor(Math.random() * 10);
//   anArray.push(randomNumber);
// }
// console.log(anArray);

// for (let i = 0; i < 5; i++) {
//   randomNumber = Math.floor(Math.random() * 10);
//   anArray.push(randomNumber);
// }
// console.log(anArray);

for (let i = 0; i < 5; i++) {
  randomNumber = Math.floor(Math.random() * 10);
  if (!anArray.includes(randomNumber)) {
    anArray.push(randomNumber);
  }
}
console.log(anArray);

let characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let id = "";
// while (id.length < 6) {
//   id += characters.charAt(Math.floor(Math.random() * characters.length));
// }
// console.log(id);

// for (i = 0; i < 6; i++) {
//   id += characters.charAt(Math.floor(Math.random() * characters.length));
// }
// console.log(id);

function randomNumber0(size) {
  for (i = 0; i < size; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}

console.log(randomNumber0(10));
console.log(randomNumber0(20));