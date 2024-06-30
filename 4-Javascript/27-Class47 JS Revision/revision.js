// 1. Number methods

// var pi = '3.14'
// console.log(pi.toFixed(0));
// console.log(pi.toPrecision(1));
// console.log(pi.valueOf())
// console.log(Number(pi))
// console.log(Number(new Date()));
// console.log(parseInt("3.14c"))
// console.log(parseFloat("3i.14c"))
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);


// 2. Math methods

// console.log(Math.LOG2E)
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 6) + 1); // random number from 1 to 6

// 3. Strings methods

console.log('Ahmad\tsultan')
console.log('Ahmad Sultan'.indexOf(" S"));
console.log("Ahmad,Sul,tan".split(","));
console.log("Ahmad,Sul,tan".split(""));
// 4. Array methods
let arr = [3, 5, 3]

let newArr = arr.map(function (item) {
    return item * 2
})

console.log("new array: ", newArr)

let filteredArr = arr.filter(function (item) {
    return item < 6
})

console.log(" array: ", filteredArr)

let foundElement = arr.find(function (item) {
    return item < 6
})

console.log("foundElement: ", foundElement)

let everyElements = arr.every(function (item) {
    return item < 6
})

console.log("everyElements: ", everyElements)

let foundIndex = arr.findIndex(function (item) {
    return item === 3
})

console.log("foundIndex: ", foundIndex)

let reduce = arr.reduce(function (prev, cur) {
    return prev + cur
})

console.log("reduce: ", reduce)



// 5. Dates methods
// 6. Objects methods
// 7. Events
// 8. Data types
// 9. JSON methods