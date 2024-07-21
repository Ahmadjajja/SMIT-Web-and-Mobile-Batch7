// // These are the topics we'll be dealing with:
// // 1. Concurrency
// // 2. Callbacks
// // 3. Promises
// // 4. async / await

// let saysomething = (num) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Something" + num)
//         }, 2000)
//     })
// }

// let talk = async (n) => {
//     let promise = await saysomething(n)
//     console.log(promise)
// }

// talk(2)
// talk(4)
// talk(6)

// Exercise 13.3
let counter = 0
function func1(args1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++;
            resolve([counter, args1])
        }, 1000)
    })
}

let func2 = async (value) => {
    console.log("counter: ", counter)
    console.log("value: ", value)

    let returnedValue = await func1(value)
    console.log("returnedValue: ", returnedValue)
}

for (let index = 1; index <= 10; index++) {
    func2(index)
}












// 5. Event loop

