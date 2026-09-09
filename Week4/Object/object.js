/* 
    ? Object
    * reference data type
    * denoted by { }
    * unlike array, no indexes
    *  has keys or properties
    * properties are denoted by. (eg. length)
    * has methods denoted by () (eg. toUpperCase())
    * has .this keyword
    * used for when data has to be recalled by same name
*/

//* Object Literal

let obj = {};
console.log(Boolean(obj));
// output: true
console.log(Boolean(obj.length));
// output: undefined, as object has no length)
