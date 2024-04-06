// // Assignment-08

// // // Q1
// // for (let index = 1; index < 11; index++) {
// //     console.log(index);
// // }


// // Q2


// let nums = [2, 4, 2, 5, 3, 7, 6, 9]

// for(let i = 0; i < nums.length; i += 1){

//     if (nums[i] % 2 == 0) {

//         console.log(nums[i]);

//     }
// }


// Taking 10 even values from user
let inputNums = []

for(let index = 1; index <= 10; index){

    let num = prompt("Taking only 10 even value from user? ")

    if (Number.parseInt(num) % 2 == 0) {
        inputNums.push(num)
        index++
    }

}
console.log(inputNums);