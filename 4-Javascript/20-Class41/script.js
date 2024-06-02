// let text = document.childNodes[1].childNodes[2].childNodes[1].innerHTML
// // let text = document.getElementById("heading")
// console.log(text)



let element = document.getElementById("humpty")
console.log(element)
console.log(element.childNodes)

// Bad approach

// element.childNodes[3].innerHTML = "All his men."

// Good approach=
let pCounter = 0

for (let index = 0; index < element.childNodes.length; index++) {
    if (element.childNodes[index].nodeType == 1) {
        pCounter++
    }

    if (pCounter == 2) {
        element.childNodes[index].innerHTML = "All his men."
        break;
    }
}