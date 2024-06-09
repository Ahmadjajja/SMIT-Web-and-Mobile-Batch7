let display = document.getElementById('display');
let currentInput = '0';
let operator = null;
let previousInput = null;
let dotExist = false

// function updateDisplay() {
//     display.innerText = currentInput;
// }

// function clearDisplay() {
//     currentInput = '0';
//     operator = null;
//     previousInput = null;
//     updateDisplay();
// }

// function appendNumber(number) {
//     if (currentInput === '0') {
//         currentInput = number;
//     } else {
//         currentInput += number;
//     }
//     updateDisplay();
// }

// function appendOperator(op) {
    // if (operator !== null) {
    //     calculateResult();
    // }
//     previousInput = currentInput;
//     operator = op;
//     currentInput = '0';
// }

// function calculateResult() {
//     if (operator === null || previousInput === null) {
//         return;
//     }
//     let result;
//     const prev = parseFloat(previousInput);
//     const curr = parseFloat(currentInput);

//     switch (operator) {
//         case '+':
//             result = prev + curr;
//             break;
//         case '-':
//             result = prev - curr;
//             break;
//         case '*':
//             result = prev * curr;
//             break;
//         case '/':
//             result = prev / curr;
//             break;
//         default:
//             return;
//     }
//     currentInput = result.toString();
//     operator = null;
//     previousInput = null;
//     updateDisplay();
// }


function updateDisplay() {
    display.innerHTML = currentInput
}

function clearDisplay() {
    currentInput = '0';
    operator = null;
    previousInput = null;
    dotExist = false
    updateDisplay()
}


function appendNumber(num) {
    if (currentInput === '0') {
        console.log("dotExist -> ", dotExist);
        currentInput = num
    } else {
        if (dotExist == false || num != ".") {
            console.log("dotExist -> ", dotExist);
            currentInput = currentInput + num
            if (num == ".") {
                dotExist = true
            }
        }
    }
    updateDisplay()
}


function appendOperator(op) {
    if (operator !== null) {
        calculateResult();
    }
    operator = op
    previousInput = currentInput
    currentInput = "0"
}


function calculateResult() {
    if (operator) {
        switch (operator) {
            case "+":
                currentInput = parseFloat(previousInput) + parseFloat(currentInput)
                updateDisplay()
                break;
            case "/":
                currentInput = parseFloat(previousInput) / parseFloat(currentInput)
                updateDisplay()
                break;
            case "*":
                currentInput = parseFloat(previousInput) * parseFloat(currentInput)
                updateDisplay()
                break;
            case "-":
                currentInput = parseFloat(previousInput) - parseFloat(currentInput)
                updateDisplay()
                break;
            case "%":
                currentInput = parseFloat(previousInput) % parseFloat(currentInput)
                updateDisplay()
                break;

            default:
                break;
        }
    }
}



