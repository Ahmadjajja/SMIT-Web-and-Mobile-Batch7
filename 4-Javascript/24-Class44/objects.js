// let hostingPlans = {
//     basic: {
//         Monthly: "$3.99", 
//         DiskSpace: "100 GB", 
//         Monthly: "1000 GB/Mo", 
//         Monthly: "10",
//         func: function () {
//             console.log("asdf");
//         }

//     },
//     professional: {
//         Monthly: "$5.99", 
//         DiskSpace: "500 GB", 
//         Monthly: "5000 GB/Mo", 
//         Monthly: "50"
//     },
//     ultimate: {
//         Monthly: "$9.99", 
//         DiskSpace: "2000 GB", 
//         Monthly: "20000 GB/Mo", 
//         Monthly: "500"
//     }
// }

// console.log(hostingPlans)

// hostingPlans.basic.discountMonths = [6, 7, 11];

// console.log(hostingPlans)


// for (const key in object) {

// }

// method1

var simplePlan = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    calc: function () {
        return 2 + 2
    }
};
var simplePlan2 = {
    name: "Basic....",
    price: 3.995678,
    space: 105670,
    transfer: 100560,
    pages: 16780,
    calc: function () {

        console.log("Hello")
    }
};


// method2

function Plan(name, price, space, transfer, pages, calc) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.calc = calc;
}

function calc() {
    return 2 + 2

}

var plan1 = new Plan("Basic", 3.99, 100, 1000, 10, calc)
var plan2 = new Plan("Baasdfsic", 3.96549, 1040, 10300, 60, calc)
var plan3 = new Plan("Baasdfsic", 3.96549, 1040, 10300, 60, calc)



console.log("simple -> ", simplePlan2.calc());
console.log("plan1 -> ", plan1.calc())
console.log("pags" in plan3)
console.log(plan1.hasOwnProperty("paes"))



function sum(n1, n2) {
    return n1 + n2
}
console.log(sum(3, 4))

let sub = function (n1, n2) {
    return n1 - n2
}
console.log(sub(3, 4))
























