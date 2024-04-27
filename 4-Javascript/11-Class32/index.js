




let person = {
    name: "Ahmad",
    education: ["BSCS", "SMIT Certified"],
    ID: "765432",
    run: function () {
        return "Ahmad is running."
    }
}



// console.log("person -> ", person)
// console.log("person.name -> ", person.name)
// console.log("person.education -> ", person.education)
// console.log("person.ID -> ", person.ID)
// console.log("person.run -> ", person.run())

// console.log(Object.values(person))
// console.log(Object.keys(person))

// let classData = [{
//     name: "Ahmad",
//     education: "BSCS",
//     ID: "765432",
//     run: function () {
//         return "Ahmad is running."
//     }
// }, {
//     name: "aqib",
//     education: "BSCS",
//     ID: "765432",
//     run: function () {
//         return "Ahmad is running."
//     }
// }, {
//     name: "Rehman",
//     education: "BSCS",
//     ID: "765432",
//     run: function () {
//         return "Ahmad is running."
//     }
// }, {
//         name: "ALi",
//         education: "BSCS",
//         ID: "765432",
//         run: function () {
//             return "Ahmad is running."
//         }
//     }]


//     for (let index = 0; index < classData.length; index++) {

//         if (classData[index].name == "aqib") {
//             console.log(classData[index])
//         }

//     }



// for in

for(const property in person){

    console.log(property)// for getting keys
    if (property == "run") {
        console.log(person[property]())// for calling run function
    } else {
        console.log(person[property])// for getting values
    }
    console.log("...............")

}

