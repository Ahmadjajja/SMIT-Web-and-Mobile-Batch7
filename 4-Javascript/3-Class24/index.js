let num1 = 22
let num2 = 23

// ++num1   called prefix increment operator. It is first incremented it's value and then used in expression
// num1++   called postfix increment operator. It is first used in expression and then it is incremented
// --num1   called prefix decrement operator. It is first incremented it's value and then used in expression
// num1--   called postfix decrement operator. It is first used in expression and then it is incremented

if (num2 == num1++) {
    console.log(`${num1} and ${num2} are equal`)
} else {
    console.log(`${num1} and ${num2} are not equal`)
}