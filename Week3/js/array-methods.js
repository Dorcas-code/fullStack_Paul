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
