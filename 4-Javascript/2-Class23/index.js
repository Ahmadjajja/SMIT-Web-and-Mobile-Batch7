// variables in programming
// 1- Variable are just like containers that stores data in it.

// Data can be of multiple types such as

// 1- Number form data (Integer + float) i.e: 2, 2.3
// 2- Character form data i.e: 'a', '1', "1"
// 3- String form data i.e: "abs", "123#$^&*|}{", 'asdfasdf'
// 4- Boolean form data i.e: (False, True), (0, 1), and etc
// 5- List form data i.e: [1, 1.2, 'a', "asd", ['a', 'b', 'c'], {name: "Ahmad", age: "22"}]
// 6- Object form data i.e: {name: "DELL", Modal: "asdf", Ram: "16GB"}

// We can declare variable in javascript in 3 ways:

// 1- let - used for local scoping
// 2- var - used for global scoping
// Note: var, and let concept will be covered in Javascript Hoisting concept in detail.
// 3- const - used for constant container


const num1 = 45
// let called variable declarator
// let num1 = 45 called variable initialization

let num2
num2 = 45
// let called variable declarator
// let num1 called variable declaration


// = is called assignment operator
// note :) it is not an equal operator

// When you want to see or display output, you used console.log()
// It is used for debugging purposes
console.log("num1 -> ", num1)   // method-1 
console.log("num1 -> "+ num1)   // method-2
console.log(`num2 -> ${num2}`)   // method-3




// local scoping


if (num1 > 40) {
    num1 = 35
    console.log("num1 => ", num1)
}
console.log("num1 => ", num1) // num1 => 35

// if ("parent agree") {
//     // GIkI University Islamabad
// } else {
//     // Agriculture university faisalabad
// }


// Expressions in programming
// We are going to discuss two types of expressions
// 1- Mathematical Expression - sum = n1 + n2

// Example:-
// let n1 = 2;
// let n2 = 4;
// let sum;
// sum = n1 + n2; // mathematical expression because we used here mathematical operator

// 2- Logical - sum > 20

// a - and operator :
// true ======= true && true
// false ======= true && false
// false ======= false && true
// false ======= false && false

// b - or operator :
// true ======= true || true
// true ======= true || false
// true ======= false || true
// false ======= false || false

// c - not operator
// true ==========    !false
// false ==========    !true



if (sum > 20 && sum != 20 ){
    console.log("sum is greater than 20");
}

