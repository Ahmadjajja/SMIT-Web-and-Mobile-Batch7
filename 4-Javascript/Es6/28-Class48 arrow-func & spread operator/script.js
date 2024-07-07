// // basic function
// // 1.
// function sum1(num1, num2) {
//     console.log("sum1 -> num1 + num2: ", num1 + num2)
// }
// sum1(3, 5)
// // 2
// let sum2 = function (num1, num2) {
//     let sum = num1 + num2
//     console.log("sum2 -> num1 + num2: ", sum)
// }
// sum2(3, 5)

// // Arrow function
// // 3
// let sum3 = (num1, num2) => console.log("sum3 -> num1 + num2: ", num1 + num2)

// sum3(3, 5)



// ternary operator
// if (2 > 5) 
// console.log("5")
// else
// console.log("2")

// let ans = (2 > 5)? 5: (2 == 2)? 2 : 0
// console.log(ans)



// spread operator

let smallArr = [10, 11, 12, 13]

let arr = [1, 2, 4, 5, 19, 3, ...smallArr]


console.log("arr : ", arr)
console.log("spead operator ...arr : ", ...arr)