let dog = {
  name: "Barbie",
  legs: "tall",
  colour: "brown",
  age: 39,
  bark() {
    return "woof woof";
  },
  favourite: function myFavourite(name) {
    return `${this.name} is my favourite dog`;
  },
};
dog.puppies = function (name) {
  return `${this.name} has 5 puppies`;
};
function friends(name) {
  return `${this.name} has many friends`;
}
dog.friends = friends;

dog.breed = "German shepherd";
dog.getDogInfo = {
  born: 2019,
  mother: "Chessy",
  favouriteDish: "Bone soup",
};
console.log(Object.keys(dog));
console.log(Object.values(dog));
// console.log(Object.keys(dog.bark))
console.log(Object.entries(dog));
console.log(dog.bark());
console.log(dog.favourite());
console.log(dog.puppies());
console.log(dog.friends());
console.log(dog);


