/* 
    ?Scope & Hoisting
    * Scope
    * determines how information in different code blocks gets accessed
    * five scopes
        * global/window  
        *  block
        *  function
        *  module
        *  lexical
        
    * Hoisting
    * JS is parsed top to bottom left to right
    * JS interpreter runs the code twice
        * First, it hoist Variables and functions decalrations into memory
        * then it executes and calls and so on
    ! it is just a bug of javascript lol
    ! so do not use var 
*/

/* 
    ? Global
    * outermost scope
    *　out .js file
*/

let globalScopeVariable = "This is an example of a global scope";
console.log(globalScopeVariable);

/* 
    ? Function Scope
    * available inside of a function only
*/

function fxScope() {
  let functionScopeVariable = "this is a function scope";
  console.log(functionScopeVariable);
  // can access global scope variable inside of a function
  console.log(globalScopeVariable);
}

fsScope();
// console.log(functionScopeVarable) //! ReferenceError cannot access fx scope in global scope

// ? HINT ? sope is accessible insde out , but not outside in

/* 
    ? Block Scope
    * anywhere there are { }
    * anytime we use { } , we created a block scope
    * can be function, loop, conditional, class, etc.
*/

{
  {
    {
      let blockScopeVariable = "this is a block scope varoable ";
      console.log(blockScopeVariable);
    }
  }
  //console.log(blockScopeVariable); //! ReferenceError: Variable is not defined
  console.log(globalScopeVariable); //* THis will work
}

/* 
   ? Lexical Scope
   * variable can be accessed in the nested position
   * inner fx scope can access outer fx scope
   * Nested fx can access, but seperate fx cannot
   * One house inside another house , they can access each other
   *  seperate house cannot access each other
*/

function outerFx() {
  let outerFunction = "Outer function scope";

  function innerFx() {
    let innerFunction = "Inner function scope";
    console.log(innerFunction);
    console.log(outerFunction);
  }
  innerFx();
}
console.log(outerFx());

/*
 * output:
 * 'Inner function scope'
 * 'Outer function scope'
 * undefined
 */

/* 
? Module Scope
* encapsulated objects nested inside files or modules
* the file's functions can be accessible in global scope of another file 
* after import
*/

const addNums = require("./addNums");
console.log(addNums(5, 7));
// output: 12

console.log("---------HoOISTING---------");

console.log(myName);
let myName;
// would this cause error?
// yes as the variable is called before it is declared
// ! this caused reference error

console.log(address);
var address;
// would this cause error?
// ? No this will not cause error!!
// * javasecipt hoist the var variable up, and save it in memory

console.log(someFunction);
function someFunction() {
  return "some function";
}
// would this cause error?
// ? No this will not cause error!!
// * javasecipt hoist the function up, and save it in memory

//? function ecpression are NOT hoisted

// console.log(fxExpression()) // ReferenceError
let fxExpression = function () {
  return "this is a fx expression example";
};

function run() {
  var foo = "foo";
  var bar = "bar";
  console.log(foo, bar);
  {
    var moo = "moo";
    let baz = "baz";
    console.log(moo, baz);
    console.log(foo, bar);
  }
  console.log(baz); // ! reference Error - going up a scope
  // * As let keyword variable is not hoisted
  console.log(moo); // ? no error, as it is var , it gets hoisted
  // * As var keyword variable ishoisted
}
run();

/*  
    * in 145 works
    * var not only gets hoisted
    * it gets scoped in the immediate FUNCITON body , not block body
    *  all else gets scoped to the immediate BLOCK body

*/

{
  var test = "sdfsdff";
}

console.log(test);

// * why does above work ? we're not in function body...
// ? global scope is actually a function
