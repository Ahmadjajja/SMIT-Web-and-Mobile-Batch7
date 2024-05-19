let date = new Date()
let currentDay = date.getDay()
console.log(currentDay)

// if (currentDay == 0) {
//     console.log("Sunday")
// } else if (currentDay == 1) {
//     console.log("Monday")
// } else if (currentDay == 2) {
//     console.log("Tuesday");
// } else if (currentDay == 3) {
//     console.log("Wednesday")
// } else if (currentDay == 4) {
//     console.log("Thursday")
// } else if (currentDay == 5) {
//     console.log("Friday");
// } else if (currentDay == 6) {
//     console.log("Saturday");
// } else {
//     console.log("Invalid value!!")
// }


switch (currentDay) {
    case 0:
       console.log("Sunday") 
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;

    default:
        console.log("Invalid value!!")
        break;
}