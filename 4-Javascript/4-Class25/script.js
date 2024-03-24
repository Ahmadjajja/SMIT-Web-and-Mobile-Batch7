// Continue...  
// var x = '1'
// var x = 2
// var x = 3.4
// var x = "3.4"  
// var x = false
// var x = [3, 'd', 4.3] // list means array
// var x = {name: "ahmad", age: "22"} // object

// Array
// Array is just like a variable that stores list of data of multiple types

// [   1  , 2  , 3  , "ahmad"  , false]
//     0    1    2       3         4

// var nums = [4, 5, 3, 5, 3, "7"]
// console.log("nums -> ", nums)
// console.log("nums[3] -> ", nums[3])
// console.log("nums[5] -> ", nums[5])
// console.log("nums length -> ", nums.length)
// console.log("last element -> ", nums[nums.length - 1])



// How can we access data from array?
// We can access data from array through indices




// function -> is just like a block of code that can perform specific task

// console.log(1)

// function greet() {
//     console.log("Hello" + "Everyone")
// }

// console.log(2)

// greet()

// console.log(3)

// greet()



// Please double the every element of array and display it.
// input ->    [4,  5, 3,  5, 3]

//                  |
//                  |

// output ->    [8, 10, 6, 10, 6]


function doubleTheElements(numbers) { // we get array as argument
    // numbers[0] = numbers[0] * 2
    // numbers[1] = numbers[1] * 2
    // numbers[2] = numbers[2] * 2
    // numbers[3] = numbers[3] * 2
    // numbers[4] = numbers[4] * 2

    for (let index = 0; index < numbers.length; index++) {
        
        numbers[index] = numbers[index] * 2

    }

    return numbers
}

let numbersInput = [4,  5, 3,  5, 3]
let numbersOutput = doubleTheElements(numbersInput)


console.log("Double array -> ", numbersOutput) // we passed array as parameter

















