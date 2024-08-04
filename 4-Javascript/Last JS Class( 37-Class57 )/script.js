
// // let a = 10 
// // let b = 90
// // function sum(a=5, b=4) {
// //     return a + b
// // }

// // console.log(sum(a))
// // // let a 

// // // x = 10
// // // console.log(x)

// // // var x





// // function name(A,B,...RESTOPERATOR) {
// //     console.log(A);
// //     console.log(B);

// // }


// // let arr = [1,2,3, 3, 4, 3, 5, 6, 7, 6, 7]
// // let res =find(function()){

// //

// function sum(x, y=5) {
//     return x + y
// }

// sum(4)
// console.log(sum(4));



















// Array.map()
let nums = [1, 2, 3, 4, 5]
let sqnums = nums.map(num => num * num)
console.log(sqnums);

// destructuring array
let array = ['banana', 'mango', 'apple']
let [fruit1, fruit2] = array;
console.log(fruit1 + ' ' + fruit2);

// destructuring object
let person = {
    firstname: 'usman',
    lastname: 'khan',
    age: 19
}

let { firstname, age } = person
console.log(firstname + ' ' + age);
