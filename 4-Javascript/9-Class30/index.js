// Strings
// - Any string data is stored in single quotes 'Ahmad' or double quotes "Ahmad"
// - It is just like an array

// Difference b/w string and array
// - In array, we use term element and in string, we use term character
// ['A', 'h', 'm', 'a', 'd'] & 'Ahmad'


// print every character of string
let firstName = "Ahmad"
let nameWithSpacing = ""

for (let index = 0; index < firstName.length; index++) {
    // console.log(firstName.charAt(index));
    nameWithSpacing = nameWithSpacing + firstName.charAt(index) + (index == firstName.length - 1? "": " ")
}

// console.log("nameWithSpacing -> ", (nameWithSpacing + ".").toUpperCase());
// Ahmad
// What does case-sensitive language means? 

// extract "ma" from "Ahmad"
console.log(firstName);
let slicedPart = firstName.slice(2, 4)

console.log(slicedPart);
console.log(firstName);


// remove "ma" from "ahmad"
console.log("_______________________");
let removingIndex = firstName.indexOf("ma")
firstName = firstName.slice(0, removingIndex) + firstName.slice(removingIndex + "ma".length)

console.log(removingIndex);
console.log(firstName);




// How many types of functions?





















