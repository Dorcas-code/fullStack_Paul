console.log("Hello world");

/*  
Alt + shift + A
 *multi-line comment 
 */

/*  
? console.log
 *a method on a console object
 */

/*  
? variable
 * container that stores data in memory
*  a box that holds something for you
* declaration
    * allows memory space to be reserved
    * start with let, var, or const keyword
    * if no value is assigned, it's value is undefined
* initilization
    * assignment of data value
    * can be any value or data type (str, int, arr, function, class, etc.)
    * can be reassigned (exept for const)
 */

// variable declaration
let firstname;
console.log(firstname);

// variable declaration and initialization
let lastname = "Lam";
//keyword, declaration space name , assignmnet operator, string value
console.log(lastname);

var examplevar = "test";
console.log(examplevar);
// ! var should not be use it is outdated

// variable redeclaration (reassignment)
lastname = "leonardo";
console.log(lastname);

// const keyword
const ssn = 123232312;
console.log(ssn);

ssn = 3434343;
console.log(ssn);
// !TypeError: value cannot be reassigned when using const

// const color
// ! SyntaxError - what's the point of creating a variable if it's undefined and cannot be reassigned?
console.log(color);

/* 
	? Coding Practices for Variables
	* be concise (ex: firstName instead of myUserFirstName)
	* be specific (ex: value instead of i)
	* utilize camelCase (most popular in JS)
	* snake_case (popular for files and variables)
	* PascalCase (popular for classes and prototypes , something that create object)
	* skewer-case (files ETC)
	* nocase
	* SCREAMING_CASE (for const or API key)
*/
