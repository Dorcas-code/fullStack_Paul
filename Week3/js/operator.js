/* 
?Oberators
* addition + 
* subtraction -
* division /
* exponants **
* dot .
* module %
* assignment =
* comparison ==
* strict comparison ==
* multiplication x */

/* 
?Expression 
* unprocessed values grouped using the ()
* evaluated to be truthy or falsy
* can be empty ()
* 
* expressions evaluate
*/
// * expression examples
console.log(2 + 2);

let exponentSample = 2 * 3;
console.log(exponentSample);

// ? Modulo -remainder of long division
let divisioResult = 10 / 2;
console.log(divisionResult);
//output : 5
let reminderResult = 10 % 2;
console.log(reminderResult);
//output : 0

/* 
    ? Assignment Comparison & Strict Comparison
    * used to assign or resolve expression of 2+ variables
*/

console.log(2 == 2);
// output : true
console.log(2 == "2");
// output : true
// because it does not check the type
// Javascript turn number 2 into a string 2
/* 
?Type Coercion
* if it walks like a duck and quaks like a duck ...
* Javascript turn number 2 into a string 2
* * compares again and voila, we 're in for PAIN!
* * is there a way to avoid this?
* Yes ! strict comparision operator
*  ===
*/

console.log(2 === "2");
//  returns false value matches but not type

// Causes some interesting problems
console.log(2 + "2");
// 2 gets type coercted into "2 "
// Gets concatenated
console.log(true + 2);
// output: 3
// Because another value of true is 1
console.log("some string" + true); // output: some stringtrue
console.log("potato" + undefined); //output: potatoundefined
console.log(2 + undefined);
//Output: NaN
// because undefined is not a number, and not a zero
