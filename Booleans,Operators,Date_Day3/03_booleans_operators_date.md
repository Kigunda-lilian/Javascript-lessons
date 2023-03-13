<!-- let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false -->

<!-- Truthy values
All numbers(positive and negative) are truthy except zero
All strings are truthy except an empty string ('')
The boolean true
Falsy values
0
0n
null
undefined
NaN
the boolean false
'', "", ``, empty string
It is good to remember those truthy values and falsy values. In later section, we will use them with conditions to make decisions.

 -->

 <!-- Undefined
If we declare a variable and if we do not assign a value, the value will be undefined. In addition to this, if a function is not returning the value, it will be undefined. -->

let firstName
console.log(firstName) //not defined, because it is not assigned to a value yet

let empty = null
console.log(empty) // -> null , means no value

+- operator
example x+-y
x= x+y, x+y results is stored in x

Types of operators

- Assignment operators
  -Arithmetic operators
  -Comparison operators
  -Logical operators
  <!-- The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation). The && operator gets true only if the two operands are true. The || operator gets true either of the operand is true. The ! operator negates true to false and false to true. -->
  -Increment operator
  <!-- In JavaScript we use the increment operator to increase a value stored in a variable. The increment could be pre or post increment. Let us see each of them: -->
  <!-- 1.Pre-increment -->
  let count = 0
  console.log(++count) // 1
  console.log(count) // 1

<!-- 2. Post-increment -->

let count = 0
console.log(count++) // 0
console.log(count) // 1

- Decrement Operator
<!-- In JavaScript we use the decrement operator to decrease a value stored in a variable. The decrement could be pre or post decrement. Let us see each of them: -->

<!-- 1.Pre-decrement -->

let count = 0
console.log(--count) // -1
console.log(count) // -1

<!-- 2.Post-decrement -->

let count = 0
console.log(count--) // 0
console.log(count) // -1

- Ternary Operators
<!-- Ternary operator allows to write a condition. Another way to write conditionals is using ternary operators. Look at the following examples:

 -->

let isRaining = true
isRaining
? console.log('You need a rain coat.')
: console.log('No need for a rain coat.')
isRaining = false

isRaining
? console.log('You need a rain coat.')
: console.log('No need for a rain coat.')

You need a rain coat.
No need for a rain coat.

let number = 5
number > 0
? console.log(`${number} is a positive number`)
: console.log(`${number} is a negative number`)
number = -5

number > 0
? console.log(`${number} is a positive number`)
: console.log(`${number} is a negative number`)

5 is a positive number
-5 is a negative number

- OPerator precedence
  <!-- Operator precedence determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence. -->
  <!-- An operator precedence is the order that an operator is executed. For example, many times a multiplication operator will execute before the addition operator. -->

console.log(3 + 4 \* 5); // 3 + 20
// Expected output: 23

console.log(4 _ 3 \*\* 2); // 4 _ 9
// Expected output: 36

let a;
let b;

console.log(a = b = 5);
// Expected output: 5

<!-- Window Methods -->
<!-- Window alert() method
As you have seen at very beginning alert() method displays an alert box with a specified message and an OK button. It is a builtin method and it takes on argument. -->

alert(message)

<!-- Window prompt() method
The window prompt methods display a prompt box with an input on your browser to take input values and the input data can be stored in a variable. The prompt() method takes two arguments. The second argument is optional. -->

prompt('required text', 'optional text')

Window confirm() method

<!--The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button. A confirm box is often used to ask permission from a user to execute something. Window confirm() takes a string as an argument. Clicking the OK yields true value, whereas clicking the Cancel button yields false value.  -->

<!-- Date Object -->
<!--  Time is an important thing. We like to know the time a certain activity or event. In JavaScript current time and date is created using JavaScript Date Object. The object we create using Date object provides many methods to work with date and time.The methods we use to get date and time information from a date object values are started with a word get because it provide the information. getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()-->

<!-- Creating a time object
Once we create time object. The time object will provide information about time. Let us create a time object -->

const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)

<!-- We have created a time object and we can access any date time information from the object using the get methods we have mentioned on the table. -->

<!--  Getting full year
Let's extract or get the full year from a time object.-->

const now = new Date()
console.log(now.getFullYear()) // 2020

<!-- Getting month
Let's extract or get the month from a time object. -->

const now = new Date()
console.log(now.getMonth()) // 0, because the month is January, month(0-11)

<!-- Getting date
Let's extract or get the date of the month from a time object. -->

const now = new Date()
console.log(now.getDate()) // 4, because the day of the month is 4th, day(1-31)

<!-- Getting day
Let's extract or get the day of the week from a time object. -->

const now = new Date()
console.log(now.getDay()) // 6, because the day is Saturday which is the 7th day
// Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)

<!-- Getting hours
Let's extract or get the hours from a time object. -->

Getting hours
Let's extract or get the hours from a time object.

<!--Getting minutes
Let's extract or get the minutes from a time object. -->

const now = new Date()
console.log(now.getMinutes()) // 56, because the time is 00:56:41

<!-- Getting seconds
Let's extract or get the seconds from a time object. -->

const now = new Date()
console.log(now.getSeconds()) // 41, because the time is 00:56:41

<!-- Getting time
This method give time in milliseconds starting from January 1, 1970. It is also know as Unix time. We can get the unix time in two ways: -->

<!-- 1. Using getTime() -->

const now = new Date() //
console.log(now.getTime()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

<!-- 2. Using Date.now() -->

const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true

<!-- Let us format these values to a human readable time format. Example: -->

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56
