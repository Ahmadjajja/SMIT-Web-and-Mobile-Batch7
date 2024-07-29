// Asynchronous JS
// 1. Concurrency
// 2. CallBack
// 3. Promises
// 4. Async Await


// Is javascript single threaded language or multi threaded language?
// Single threaded

// Event Loop
// Single executor of the code is called event loop.

// Two concepts are very important to understand Event loop that are:
// 1. Call Stack
// 2. Callback Queue


let num1 = 4;
let num2 = 5;

setTimeout(() => {
    console.log(num1, num2);
}, 0)

function sum(n1, n2) {
    return n1 + n2;
}

console.log(sum(num1, num2))

function job(callback1, callback2) {
    callback1();

    callback2();
    callback2();
    callback2();
}

job()