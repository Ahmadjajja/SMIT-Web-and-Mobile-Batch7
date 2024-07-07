// EcmaScript6 (ES6)
// 1. Arrow function
// 2. Ternary Operator
// 3. Spread Operator & Rest operator
// 4. Function default parameters
// 5. Destructuring (W.R.T Arrays & Objects)
// 6. Local Storage
// 7. var vs let vs const
// 8. Template literals


// 1. Arrow function - already done.
// 2. Ternary Operator - already done.
// 3. Spread Operator & Rest operator

// let arr1 = [1, 3, 5, 7]
// let arr2 = [9, 11]



// console.log([...arr1, ...arr2])

// // [1, 3, 5, 7, 100, 200, 9, 11]

// console.log([...arr1, 100, 200, ...arr2])

// Rest Operator

// function sum(n1, n2, n3, n4, n5, ...nums) {
//     console.log(nums)

// }

// sum(1, 2, 3, 4, 5, 6, 6, 7, 8, 9)




// // 4. Function default parameters

// function sum(n1, n2 = 5, n3 = 6, n4 = 7) {
//     return n1 + n2 + n3 + n4
// }

// console.log(sum(3))

// 5. Destructuring (W.R.T Arrays & Objects)


// let numbers = [2, 5, 6, 3, 4, 33, 6, 8]

// const [num1, num2, , num, , ...nums] = numbers

// console.log(num1, num2, num)


// let person = {
//     name: "Ali",
//     age: "22",
//     height: "5.9 f",
//     qualification: "BSCS"
// }


// let {name: firstName, qualification: qual, ...restProps} = person


// console.log(firstName, qual, restProps)

// // 8. Template literals

// let nam = "Ali"

// console.log("Hello Everyone, " + nam + " is a good person.") // Hello Everyone, Ali is a good person.
// console.log(`Hello Everyone, ${nam} is a good person.`)

// 7. Block Scoping (var vs let vs const)

// var - global scope
// let - block - {}
// const - constant


// var x = 7;

// function func() {
//     var x = 5
//     console.log(x)  // 5
// }
// func()
// console.log(x) // 

// let x = 5;
// x = 10




