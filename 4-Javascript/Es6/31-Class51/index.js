// Asynchronous JS
// 1. Concurrency:
//                Doing multiple things at the same time.
// // 2. Callbacks:


// function displayGradeInfo(g) {
//     switch (g) {
//         case "A":
//             console.log(`Ahmad got ${g} grade`)
//             break;
//         case "B":
//             console.log(`Ahmad got ${g} grade`)
//             break;
//         case "C":
//             console.log(`Ahmad got ${g} grade`)
//             break;
//         case "D":
//             console.log(`Ahmad got ${g} grade`)
//             break;
//         case "F":
//             console.log(`Ahmad got the ${g} grade`)
//             break;
//         default:
//             console.log(`Incorrect Input`)
//             break;
//     }
// }


// function CalculateGrade(marks, callback) {

//     if (marks > 80) {
//         callback("A")
//     } else if (marks > 60) {
//         callback("B")
//     } else if (marks > 50) {
//         callback("C")
//     } else if (marks > 40) {
//         callback("D")
//     } else {
//         callback("F")
//     }

// }

// CalculateGrade(92, displayGradeInfo)


// set interval

// let count = 0
// let interval = setInterval(encourage, 5000);
// function encourage() {
//     console.log("You're doing great, keep going!");
//     console.log("count - ", count)
//     count++
//     if (count == 2) {
//         clearInterval(interval)
//     }
// }


// // set time out

// setTimeout(() => {
//     console.log("Hello Everyone!")
// }, 3000);

// Exercise 13.1

// function greet(name) {
//     console.log(`Hello, I'm ${name[0]} ${name[1]}}`)
// }


// function secondFunc(fullName, callback) {
//     let nameArr = fullName.split()
//     callback(nameArr)
// }

// secondFunc("Ahmad Sultan", greet)






















