// function simpleFunction(value) {
//     console.log(value);
//     return  
// }

// simpleFunction(1)
// simpleFunction(2)
// simpleFunction(3)


// // Generator Function
// function* generatorFunction() {

//     yield 1
//     yield 2
//     yield 3
//     yield 4
//     yield 5

// }

// function* generatorFunction() {
//     let num = 0
//     while (true) {
//         yield num
//         num = num + 1
//     }
// }

// let generator = generatorFunction()
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)


// _______________________________________________________________________

// Curying

// Simple function(Gee seedi finger sy hi nikly ga.)
function sum3nums(num1, num2, num3) {
    return num1 + num2 + num3
}
console.log(sum3nums(2, 4, 8));


// Curying function(Gee tedhi finger sy hi nikly ga.)

function upperFunc(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3
        }
    }
}

console.log(upperFunc(2)(4)(8))






















