// Asynchronous JS

// 1. Concurrency
//              Doing multiple thing at the same time.
// 2. Callbacks

// let func1 = () => {
//     console.log("Hello from function 1.")
// }


// let func2 = (function1) => {
//     console.log("Hello from function 2.");

//     function1()
// }

// func2(func1)

// 3. Promises

// part-1
let promise = new Promise((success, reject) => {
    let promiseContent = "kaam kr k ayen hyn."

    if (promiseContent == "kaam kr k ayen hyn.") {
        success("I have done the work.")
    } else {
        reject("I haven't done the work")
    }

})

// part-2
promise
    .then((res) => {
        console.log(res)

    })
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log("err: ", err)
    })

// 4. async / await
// 5. Event loop







// Exercise 13.2


let prom = new Promise((resolve, reject) => {
    resolve("Start counting")
});

function counter(value) {
    console.log(value);
}

prom
    .then((res) => {
        counter(res)
        return "One"
    })
    .then((res) => {
        counter(res)
        return "Two"
    })
    .then((res) => {
        counter(res)
        return "Three"
    })
    .catch((res) => {
        counter(res)
        return "Three"
    })
















