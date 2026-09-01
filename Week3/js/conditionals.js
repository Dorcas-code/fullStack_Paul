/* 
    ? Conditional is a statement checking if an expression is truthy
    * If an expression is false , nothing happens
    * If an expression is true, the code block executes
*/

/* 
    ? If Statement
    * Check if something is true and executes
*/

let lightSwitch = "on";

// keyword ; expression ; code block
if (lightSwitch === "on") {
  console.log("The light is on");
}

let hasTurbo = true;

console.log("The car has turbos");

/* 
   ? Else Statment
   * if all else fails, this code block executes
*/

if (hasTurbo) {
  console.log("The car has turbos");
} else {
  console.log("The car does not have turbos");
}

/* 
   ? Else If  Statment
   * Allows us to have extra conditions to check aginst
   
   */

if (temp >= 80) {
  console.log("It's hot outside");
} else if (temp >= 60) {
  console.log("It's warm outside");
} else {
  console.log("It's cold outside");
}

/* 
! Example of Logic error
* this is a logic error LOL , as larger then 80 also
* print out  "It's warm outside" and "It's cold outside"
 */

if (temp >= 80) {
  console.log("It's hot outside");
}

if (temp >= 60) {
  console.log("It's warm outside");
}

console.log("It's cold outside");

/* 
    ? Logic Operators NOT AND OR
    * OR Operator (||)
        * True if at least one of the conditions is true
    * AND Operator (&&)
        * True if all conditions are true
    * NOT Operator (!)
        * Flips the condition
        * Falsy
        * !false resolve to true
*/

let hasBear = true;
let hasDinner = true;

if (hasBear || hasDinner) {
  console.log("Quite happy");
}

if (hasBear && hasDinner) {
  console.log("Very happy");
}

if (!hasBear) {
  console.log("Not happy");
}

//Same as above
if (hasBear !== true) {
  console.log("Not happy");
}

/* 
    ? Challenge
    * answer in Discord in #project-showcase
    * create an age variable
    * create a country variable
    * if a user is > 21 and country is US, they can drink
    * if a user is > 18 an country is Germany, they can drink
    * if a user is > 16 and country is US, they can drive
    * if a user is > 18 and the country is Germany, they can drive
    * if a user is < 18 the user is underage
    ! Spicey Mode: what if the value of a variable is something wrong? How will you handle it?
*/

let age = 25;
let country = "US";

if (typeof age !== "number" || typeof country !== "string") {
  console.log("Invalid input");
} else {
  if (country !== "US" && country !== "Germany") {
    console.log("Invalid country");
  } else {
    if (age > 21 && country === "US") {
      console.log("They can drink");
    } else if (age > 18 && country === "Germany") {
      console.log("They can drink");
    } else if (age > 16 && country === "US") {
      console.log("They can drive");
    } else if (age > 18 && country === "Germany") {
      console.log("They can drive");
    } else {
      console.log("The user is underage");
    }
  }
}
