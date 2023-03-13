class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
}
const Animal1 = new Animal("chessy", 23, "grey", 4);
console.log(Animal1);

class Dog extends Animal {
  alwaysAddAmethod() {
    console.log("I do bark");
  }
}
class Cat extends Animal {
  constructor(name, age, color, legs, sound = "meows") {
    super(name, age, color, legs);
    this.sound = sound;
  }
}
const cat1 = new Cat("ellena", 5, 4, "brown");
console.log(cat1);

// console.log(new Dog("naham", 27, "grey", 4))
const dog1 = new Dog("naham", 27, "grey", 4);
console.log(dog1.alwaysAddAmethod());
console.log(dog1);
// console.log(Dog.alwaysAddAmethod)
class Student {
  constructor(firstname, lastname, course, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.course = course;
  }
}
console.log(new Student("Everylyne", "Nkatha", "Architecture", 26));
