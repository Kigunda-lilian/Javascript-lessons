<!-- Conditional statements are used for make decisions based on different conditions. By default , statements in JavaScript script are executed sequentially from top to bottom. If the processing logic require so, the sequential flow of execution can be altered in two ways: -->

<!-- 1. Conditional execution: a block of one or more statements will be executed if a certain expression is true -->

<!-- 2. Repetitive execution: a block of one or more statements will be repetitively executed as long as a certain expression is true. In this section, we will cover if, else , else if statements. -->

<!--Conditions can be implementing using the following ways:

if
if else
if else if else
switch
ternary operator  -->

<!--  If
In JavaScript and other programming languages the key word if is to used check if a condition is true and to execute the block code. To create an if condition, we need if keyword, condition inside a parenthesis and block of code inside a curly bracket({}).-->

// syntax
if (condition) {
//this part of code runs for truthy condition
}

let num = 3
if (num > 0) {
console.log(`${num} is a positive number`)
}
// 3 is a positive number

<!-- If Else
If condition is true the first block will be executed, if not the else condition will be executed. -->

// syntax
if (condition) {
// this part of code runs for truthy condition
} else {
// this part of code runs for false condition
}

<!-- If Else if Else
On our daily life, we make decisions on daily basis. We make decisions not by checking one or two conditions instead we make decisions based on multiple conditions. As similar to our daily life, programming is also full of conditions. We use else if when we have multiple conditions. -->

// syntax
if (condition) {
// code
} else if (condition) {
// code
} else {
// code

}

<!--Switch
Switch is an alternative for if else if else else. The switch statement starts with a switch keyword followed by a parenthesis and code block. Inside the code block we will have different cases. Case block runs if the value in the switch statement parenthesis matches with the case value. The break statement is to terminate execution so the code execution does not go down after the condition is satisfied. The default block runs if all the cases don't satisfy the condition.  -->

switch(caseValue){
case 1:
// code
break
case 2:
// code
break
case 3:
// code
break
default:
// code
}

<!-- Ternary Operators
Another way to write conditionals is using ternary operators. We have covered this in other sections, but we should also mention it here. -->

let isRaining = true
isRaining
? console.log('You need a rain coat.')
: console.log('No need for a rain coat.')
