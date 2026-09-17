/*
 * part of Object Oriented Programming Paradigm (OOP)
 * has APIE
 * abstraction
 * polymorphism
 * encapsulation
 * inheritance
 * template which build objects for us
 */

class Student {
  // method used to create and initialize an object
  constructor(name, cohert, year, country) {
    this.name = name;
    this.cohert = cohert;
    this.year = year;
    this.country = country;
    this.bestInstructor = "Paul";
  }
  // * DO NOT need seperated by comma for class, like object

  //? Abstraction - it just works
  //? Press a button on a car , it just works
  modifyProperty(key, newValue) {
    this[key] = newValue;
  }
}

// utilize new keyword to create an INSTANCE of this class
// ? This is called INSTANCE
let D = new Student("D", 11, 2026, "hk");
let P = new Student("P", 11, 2026, "USA");
//? Polymorphism - same same but difference INSTANCE from a class
console.log(D);
/* 
output:
Student {
  name: 'D',
  cohert: 11,
  year: 2026,
  country: 'hk',
  bestInstructor: 'Paul'
}
*/

//? Inheritance Example - we inherit the same method across differnect instances
D.modifyProperty("cohert", "fullstack-11");
P.modifyProperty("name", "Patrick");
console.log(D);
/* 
output:
Student {
  name: 'D',
  cohert: 'fullstack-11',
  year: 2026,
  country: 'hk',
  bestInstructor: 'Paul'
}
*/
// ? Encapsulation Example - we cannot access it outside of scope
// console.log(cohert) // ReferenceError
