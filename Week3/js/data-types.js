// ? JS data Types:
/*
 * Primitive
    *string
    *number
    *boolean
    *null
    *undefined
    *Not a Number

 * Reference
    *array
    *object
    *Map
    *Set

! JS does not enforce data type definition. 
! This causes type coercion issues. which is type accidentally changed 

 */

/* 
	? Strings
	* represents characters
	* enclosed '', "", `` (backticks under your esc key)
*/

console.log("This is a text");
console.log("This is also a text");
console.log(`So is this`);

// ? How do we connect separate strings ?

let firstName = "Chris";
let state = "California";

console.log(firstName, state);
// * Output "Chris California"
// above are just mulitple arguments in a method
// * the string are still in seperate variable

// ? String Concatenation (adding of strings)
let nameState = firstName + state;
console.log(nameState);
// * Output "Chris California"

// ? A number can be represented as a string
let currentYear = "2026";
console.log(currentYear);
// ! this is a string representation of a number data type

// ? Checking of data type
console.log(typeof currentYear);
// Output: string

// ? String are indexed starting from zero
let pdk = "psdfdfknwiefef";
console.log(pdk[5]);
//Output: f

// ? Get length of a string
// * .length is a property
console.log(pdk.length);
//Output: 14

// * index that does not has value
console.log(pdk[30]);
//Output:undefined, as pdk[30] not yet assigned a value
// ! May cause index out of bound error (off by one error)

// ? Strings are immutable

let leastFavoriteState = "Indiana";
leastFavoriteState[0] = "p";
console.log(leastFavoriteState);
// ! still log "Indiana"
// * Strings are immutable
leastFavoriteState = "Pndiana";
console.log(leastFavoriteState);
// * Can do it by reaasign new value

// ? String Interpolation - another way to piece strings together
/*
 * starts with backticks ``
 *
 */
let strInterpolatedState = `${firstName} ${state}`;
let strConcatenatedSample = firstName + " " + state;
console.log(strInterpolatedState, strConcatenatedSample);
// * Output "Chris California Chris California"

/* 
	? Challenge
	* create a variable fullName with your name
	* create a variable street with street name
	* create a variable with state, city, etc with a value
	* finally interpolate them all together as finalAddress string
	! extra challenge - can you print each line on a new line in the console?
*/

let fullName = "Dorcas";
let street = "Dai Nam Sai Street";
let city = "Lai Chi Kok, Kowloon";
let finalAddress = `${fullName}
 ${street} 
 ${city}`;
console.log(finalAddress);
//or
let anotherAddress = fullName + "\n" + street + "\n" + city;
// "\n" breack into a new line
console.log(anotherAddress);

/* 
	? Number
	* any integer or decimal
*/

console.log(25);
console.log9(3.14);
console.log(typeof 200);

/* 
	?Boolean
	* Binary value
   * true or false
   * Yes or No
   * 0 or 1
   * Falsy Vaues
      *0
      * undefined
      * null
      * NaN
*/

console.log(Boolean(0));
// output: false
// Check boolean value of 0
console.log(Boolean(1));
// output: true
// Check boolean value of 1
console.log(Boolean(null), Boolean(undefined), Boolean(NaN));
//output: false, false, false
console.log(Boolean(""), Boolean(" "));
//output: false, true
// empty string is false, space is true
