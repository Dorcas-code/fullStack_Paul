/* 
    ?Array Methods
    * Method is a function
    * It lives on the object type (in this instance, Array constructor)
    * It's accesible by each instance of your object
    * denoted by .NameOfMethod()
*/

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jan", "Jul", "Aug", "Sep"];

/* 
   ? push()
    * It mutates (changes) your original array by adding the item to the end.
    *It returns a number, which is the updated count of items
*/

let pushResult = months.push("Oct");
console.log(months, "push() result", pushResult);

/* 
   ? pop()
       * It mutates (changes) your original array by removinging the item to the end.
       *It returns a number, which is the updated count of items
*/

let popResult = months.pop();
console.log(months, "pop() result", popResult);

/* 
   ? unshift()
   * insert element at the start of the array
   * returns the new length of the array
*/

let unshiftResult = months.unshift("months");
console.log(months, "unshift() result", unshiftResult);

/* 
   ? shift()
   * remove first element at the start of the array
   * returns the removed element
*/

let shiftResult = months.shift();
console.log(months, "shift() result", shiftResult);

/*
 * push , pop add or remove from the end
 * shift , unshift   add or remove from the start
 ? IF you add if returns the length
 ? IF you remove it returns the item you remove
 ! So it is easier for you to know what you have removed and rollback when there is mistake
 */

/* 
    ? Challenge
    * Iterate through our array and clear it out
    * while you clear it out, if the item is current , console log it
    * console log the array once completed
 */

for (month of months) {
  let value = months.pop();
  if (value === "Sep") {
    console.log(value);
  }
}

/*
 * OUtput:
 * 'Sep'
 * ["Jan", "Feb", "Mar", "Apr"];
 */

for (month of months) {
  let value = months.shift();
  if (value === "Sep") {
    console.log(value);
  }
}
console.log(months);

/* 
    ? Advanced Array Methods
    * forEach
    * filter
    * map
    * reduce
    * allow us to parse thru date efficiently
*/

const state = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

/* 
    ? forEach
    * a loop 
    * takes your iterator, iterables and original array
    * fires a callback function for every single iteration
        * a callback fx - a fx that runs each time
        * Calling it back every single time
    * ForEach does not return anything

*/
state.forEach((value, index, originArray) => {
  console.log(`Iterable: ${value} , Index:${index}`);
  console.log(originArray);
});

let forEachResult = state.forEach((value, index, originArray) => {
  console.log(`Iterable: ${value} , Index:${index}`);
  return "force it to return something";
});

console.log(forEachResult);
// * Output undefined
// ! ForEach does not return anything

/* 
    ? Challenge
    * Create a new array
    *　if a state start with a letter "M", put it inside the new array

*/

let startwithM = [];
state.forEach((value) => {
  if (value[0] === "M") {
    startwithM.push(value);
  }
});

console.log(startwithM);
// output: [ 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana' ]

let grades = [56, 25, 108, 98, 77, 3, 183];

/* 
    ? Challenge
    * use forEach 
    *　check if each is divisible by 2
    * If it is save it into a new array called divideByTwo
    * 
    * run another forEach
    * round up every grade by 10 points (tricky!)
    * if the grade is over 90 do nothing

*/

let divideByTwo = [];

grades.forEach((grade) => {
  if (grade % 2 === 0) {
    divideByTwo.push(grade);
  }

  // Wrong !! do one thing at a time!
  //   if (grade < 90) {
  //     Math.ceil(grade * 10);
  //   }
});

function handleGrades(val) {
  if (val < 90) {
    console.log(val + 10);
  }
}

// * Mutate original array
function handleGrades_notLog(val, index, originArray) {
  if (val < 90) {
    originArray[index] = val + 10;
  }
}

// ? Callback functions need to pass by reference
grades.forEach(handleGrades);
grades.forEach(handleGrades_notLog);

console.log(grades);
console.log(divideByTwo);

/* 
  * .map()
  * same as forEach except one crutial difference
  * creates a new array with elements returned from the callback fx
  ! returns for every instances of an iterable
  ? An iterable is an object you can loop over element by element.
*/

let statesWithI = state.map((s) => s.toUpperCase());
// output all states in the array with capital letter

console.log(statesWithI);

console.log(grades.map((i) => i + 10));
// output: All grades add 10

console.log(
  grades.map((i) => {
    if (i < 90) {
      return i + 10;
    }
  }),
);

//output: contain undefined, because did not set what to return if bigger than 90

console.log(
  grades.map((i) => {
    if (i < 90) {
      return i + 10;
    } else {
      return i;
    }
  }),
);

//output: does not contain undefined

// * Can erase else
// * Using "return early" skill in programming

console.log(
  grades.map((i) => {
    // ? Early return Example
    // ? if condition is true, we will leave the function
    if (i < 90) {
      return i + 10;
    }
    return i;
  }),
);

let ternaryExample = grades.map((i) => (i < 90 ? i + 10 : i));
console.log(ternaryExample);

/* 
  ? Challenge: .map()
  * Rules:
  * Convert each name to lowercase.
  * Remove all spaces.
  * Add "@" to the beginning.
  
  * Restrictions:
    * Do not use a for loop or forEach().
    * You must use map().
    * Do not modify the original students array.

*/
const students = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Brown",
  "Diana Prince",
  "Ethan Hunt",
  "Fiona Green",
];

let studentsWithMap = students.map((s) => {
  let newword = "";
  for (char of s) {
    if (char === " ") {
      char = "";
    }
    newword += char;
  }

  s = "@" + newword.toLowerCase();
  return s;
});

c;

console.log(studentsWithMap);

// *Solution by tutor Paul

let usernames = students.map((s) => {
  "@" + s.toLowerCase().replace(" ", "");
  return s;
  // ? Use .replace() which except a regular expression/string with a custom string
  // ? .replace() replaces part of a string and returns a new string.
});

let shortCut_usernames = students.map((s) => {
  return `@${s.toLowerCase().replace(" ", "")}`;
  // ? Use .replace() which except a regular expression/string with a custom string
  // ? .replace() replaces part of a string and returns a new string.
});

/*
 * .filter()
 * creates a new array from returned values
 * only runs on filtered iterables
 * "which meet the condition
 * this means it cannot have if/else
 ! map() will return other things other than elements that meet the condition
 */

let startsWithI_filter = state.filter((s) => s[0] === "I");

//or
let startsWithI_filter2 = state.filter((s) => {
  s.startsWith("I");
});

let startsWithT2 = state.map((s) => {
  if (s[0] === "I") {
    return s;
  } else {
    return;
  }
});

console.log(startsWithT, startsWithI2);

/* 
  ? Chanllege
  * given our array of grades
  * find passing scores uwing filter method
  * passing should be 60 and above

*/

let passingGrades = grades.filter((g) => g > 40);

console.log(passingGrades);

/*
 *.reduce()
 * adds a reducer callback
 * can hold value of the prior element
 * think like a summation keeping track
 * stores initial value as an accumulator
 */

let total = 0;

for (i of grades) {
  total += i;
}

console.log(total);

let totalGrades = grades.reduce((sum, grade) => {
  return sum + grade;
}, 0);

/* 
 syntax

 arr.reduce((preValue/ accumulator, curValue, index (optional), arr  (optional)) => {
 }, initialValue (optional))
  
 * preValue otherwise known as an accumulator
*/

console.log(totalGrades);
