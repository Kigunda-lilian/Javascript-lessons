// Class Constructor
// The constructor is a builtin function which allows as to create a blueprint for our object. The constructor function starts with a keyword constructor followed by a parenthesis. Inside the parenthesis we pass the properties of the object as parameter. We use the this keyword to attach the constructor parameters with the class.

// The following Person class constructor has firstName and lastName property. These properties are attached to the Person class using this keyword. This refers to the class itself.

class Person {
  constructor(firstName, lastName) {
    console.log(this); // Check the output from here
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person();

console.log(person);

// All the keys of the object are undefined. When ever we instantiate we should pass the value of the properties. Let us pass value at this time when we instantiate the class.

class Personn {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Personn("Asabeneh", "Yetayeh");

console.log(person1);

const person2 = new Person("Lidiya", "Tekle");
const person3 = new Person("Abraham", "Yetayeh");

console.log(person2);
console.log(person3);

class Personn1 {
    constructor(firstName, lastName, age, country, city) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
  }
  
  const person1a = new Personn1('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  
console.log(person1a)
  
// Default values with constructor
// The constructor function properties may have a default value like other regular functions.

// class Person {
//     constructor(
//       firstName = 'Asabeneh',
//       lastName = 'Yetayeh',
//       age = 250,
//       country = 'Finland',
//       city = 'Helsinki'
//     ) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//     }
//   }
  
//   const person1 = new Person() // it will take the default values
//   const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
//   console.log(person1)
//   console.log(person2)


