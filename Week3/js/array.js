/* 
    ? Array
    * data type
    * reference daya type, not primitive
    * denoted by square brackets
    * iterable
    * has index
    * can hold any data type within it
    * can be nested
*/

// an example of an empty array
let arr = [];
console.log(typeof arr, arr);
// comes up as object, everything in JS is an object

// check array datatype by using instanceof and interface
console.log(arr instanceof array);

// ? Extra credit, you can use constructors to build object literals (line 14)
let arrViaConstructor = new Array();
console.log(arrViaConstructor);
// will be learnt later

console.log(Boolean(arr));
// output true
// ! empty array is not false!

console.log(Boolean(""));
// output false

console.log(
  Boolean(arr.length),
  "check ig array is empty by running .length on ut",
);

let usHolidays = ["Labour day", "Halloweens", "Thanksgiving"];

console.log(usHolidays);

// ? Accessing array itmes via index

console.log(usHolidays[0]);
// ? out of bounds without error
console.log(usHolidays[5]);
// throws undefined, not an error

// ? Array Valaue Reassignmnet
usHolidays[0] = "Columbia Day";

let allDataTyoeUnMyAarrayYe = ["string", 23423, true, undefined, {}];
console.log(allDataTyoeUnMyAarrayYe);

// ? Array Nesting

let carGarage = [
  ["BMW", "Parschit"],
  ["Masda", "Honda", ["Mistsubuahnu", "Kia"]],
];

console.log(carGarage);
//? Challenge = how would you console.log(Masda)
console.log(carGarage[[1][0]]);

//? Challenge = how would you console.log(Mistsubuahnu)
console.log(carGarage[[1][2][0]]);

/* 
? Challenge 
* create a variable name fullStack11
* assign it to an array
* the array should contain a subarray with instructor name and title (e.g.paul, instructor)
* also contain another subarray with a few students name
* after the completed , change Paul's name to Pablo
* access Paul's title nad make it uppercased
* 
!Spicy challenge , remove the student that is last entry
*/

let fullStack11 = [];
fullStack11 = ["paul", "instructor", ["Alice", "Tom", "Peter"]];
fullStack11[0] = "Pablo";
fullStack11[1] = fullStack11[1].toUpperCase();
// *Easiest way to do the Spicy challenge
fullStack11[2].pop();
console.log(fullStack11);

// * another way to do the Spicy challenge - set to null
fullStack11[2][fullStack11[2].length - 1] = null;

// * best way to do the Spicy challenge - trim the length
fullStack11[2].length = fullStack11[2].length - 1;
console.log(fullStack11);

// ? EXTRA CREDIT
let make = ["BMW", "Audi", "Porsche"];
console.log(make);
// ? how to copy this array?
let germanCars = make;
console.log(germanCars);

let firstName = "Paul";
console.log(firstName);

let lastName = firstName;
console.log(lastName);

germanCars[0] = "Mercedes";
console.log(make);
console.log(germanCars);
// ! Both become same!!!
// ! As they point to the same array object!

lastName = "Potato";
console.log(firstName);
console.log(lastName);
// * output: "Paul" and "Potato" respectively
// * As variable is primitive type, type point to seperate box

/* 
? Array Shallow Copy
* when an arrau is copied using pointers
* it does't actually copy the array values
* the different variables point to the same values
* if a value changes in one spot it will change in another
! Use equal sign directly

*/

// ? Array Deep Copy
// ? Not pointing to the same array anymore
//! Use loop 


let independentDrivenCars = [];

for (i of make) {
  independentDrivenCars(independentDrivenCars.length) =i;
  // console.log(i);
}
console.log(independentDrivenCars);
independentDrivenCars[0] = "Voksvegan";
console.log(make, independentDrivenCars);
