<!--  Data types describe the characteristics of data. Data types can be divided into two:

Primitive data types
Non-primitive data types(Object References) -->

<!-- Primitive data types in JavaScript include:

- Numbers - Integers, floats
- Strings - Any data under single quote, double quote or backtick quote
- Booleans - true or false value
- Null - empty value or no value
- Undefined - a declared variable without a value

Non-primitive data types in JavaScript includes:

- Objects
- Functions
- Arrays -->

<!-- Primitive data types are immutable(non-modifiable) data types. Once a primitive data type is created we cannot modify it.

Example:

let word = 'JavaScript'
If we try to modify the string stored in variable word, JavaScript should raise an error. Any data type under a single quote, double quote, or backtick quote is a string data type.

word[0] = 'Y'

Primitive data types are compared by its values. Let us compare different data values. See the example below:

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false -->

<!-- Non-primitive data types are modifiable or mutable. We can modify the value of non-primitive data types after it gets created. Let us see by creating an array. An array is a list of data values in a square bracket. Arrays can contain the same or different data types. Array values are referenced by their index. In JavaScript array index starts at zero. I.e., the first element of an array is found at index zero, the second element at index one, and the third element at index two, etc.

let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3]
As you can see, an array, which is a non-primitive data type is mutable.

 Non-primitive data types cannot be compared by value. Even if two non-primitive data types have the same properties and values, they are not strictly equal.

let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false
Rule of thumb, we do not compare non-primitive data types. Do not compare arrays, functions, or objects.

Non-primitive values are referred to as reference types, because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.

let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true-->

<!-- Math Object
In JavaScript the Math Object provides a lots of methods to work with numbers.

 -->

 <!-- Strings
Strings are texts, which are under single , double, back-tick quote. To declare a string, we need a variable name, assignment operator, a value under a single quote, double quote, or backtick quote. Let's see some examples of strings: -->

let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`


<!-- String Concatenation
We can concatenate strings in different ways.

Concatenating Using Addition Operator
Concatenating using the addition operator is an old way. This way of concatenating is tedious and error-prone. It is good to know how to concatenate this way, but I strongly suggest to use the ES6 template strings (explained later on). -->
// Declaring different variables of different data types
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250


let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)
Asabeneh Yetayeh. I am 250. I live in Finland


<!--  Long Literal Strings
A string could be a single character or paragraph or a page. If the string length is too big it does not fit in one line. We can use the backslash character (\) at the end of each line to indicate that the string will continue on the next line. -->

<!-- Escape Sequences in Strings
In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:

\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (") -->

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

<!-- Output in console: -->
I hope everyone is enjoying the 30 Days Of JavaScript challenge.
Do you ?
Days  Topics  Exercises
Day 1 3 5
Day 2 3 5
Day 3 3 5
Day 4 3 5
This is a backslash  symbol (\)
In every programming language it starts with "Hello, World!"
In every programming language it starts with 'Hello, World!'
The saying 'Seeing is Believing' isn't correct in 2020

<!-- Template Literals (Template Strings)

To create a template strings, we use two back-ticks. We can inject data as expressions inside a template string. To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign. See the syntax below. -->

//Syntax
`String literal text`
`String literal text ${expression}`

<!-- Example: 1 -->
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

<!--  Example:2-->
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

I am Asabeneh Yetayeh. I am 250. I live in Finland.
I am Asabeneh Yetayeh. I live in Helsinki, Finland. I am a teacher. I teach JavaScript.

<!-- Using a string template or string interpolation method, we can add expressions, which could be a value, or some operations (comparison, arithmetic operations, ternary operation). -->
let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)

2 is greater than 3: false



<!-- Checking Data Types and Casting

Checking Data Types
To check the data type of a certain variable we use the typeof method.

Example: -->
// Different javascript data types
// Let's declare different data types

let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 250                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object


<!-- Changing Data Type (Casting)
Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error. -->

<!-- String to Int
We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', etc. We can convert string to number using the following methods:

parseInt()
Number()
Plus sign(+) -->

let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10

let num = '10'
let numInt = Number(num)

console.log(numInt) // 10

let num = '10'
let numInt = +num

console.log(numInt) // 10

<!-- String to Float
We can convert string float number to a float number. Any float number inside a quote is a string float number. An example of a string float number: '9.81', '3.14', '1.44', etc. We can convert string float to number using the following methods:

parseFloat()
Number()
Plus sign(+) -->

let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81

let num = '9.81'
let numFloat = Number(num)

console.log(numFloat) // 9.81

let num = '9.81'
let numFloat = +num

console.log(numFloat) // 9.81

<!--  Float to Int
We can convert float numbers to integers. We use the following method to convert float to int:

parseInt()-->

let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9