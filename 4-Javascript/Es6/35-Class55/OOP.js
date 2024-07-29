// OOP (Object Oriented Programming)

// Note: Javascript is not pure Object Oriented Programming Language.

class Student {
    constructor(name, age, dob) { // constructor function automatically when we create new object of specific class.
        this.name = name // called data member
        this.age = age
        this.dob = dob
    }

    display(){ // called member function
        console.log(this.name, this.age, this.dob)
    }
}

const student1 = new Student("Zubair", "20", "2004")
const student2 = new Student("Ali", "24", "2000")

student1.display()
console.log("student1 :", student1)
student2.display()
console.log("student2 :", student2)
