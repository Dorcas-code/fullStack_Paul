/* 
    ? Conditional is a statement checking if an expression is truthy
    * If an expression is false , nothing happens
    * If an expression is true, the code block executes
*/

/* 
    ? If Statement
    * Check if something is true and executes

    ? Syntax
     if (condition / expression) {
        code block to execute if the condition is true
     }
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

// ? Error handling example

let email = "example@example.com";

if (!email) {
  console.log("please enter an email");
}

/* 
    ? Ternary Operator
    * Syntax: condition ? expressionIfTrue : expressionIfFalse
    * Used for quick checks, popularized within React 
 */

let speed = 60; // example speed value

if (speed > 60) {
  console.log("Too fast");
} else {
  console.log(`Safe speed is ${speed}`);
}

// Using ternary operator
speed > 60 ? console.log("Too fast") : console.log(`Safe speed is ${speed}`);
// *speed > 60 ? console.log("Too fast")
// ! SyntaxError - always needs an else statement

// ? Super mini challenge = how could you write a ternary without an else statement then?

speed > 60 ? console.log("First condition") : null;
// * null means lack of anything
// * Lil' cheat to bypass the need for an else statement

let myAge = 20;

// * The : becomes an else if instead of an else
// * multiple consitions that you want to chain
myAge < 18
  ? console.log("You are a teenager")
  : myAge < 21
    ? console.log("You can trabel but not drink in the US")
    : myAge >= 21
      ? console.log("You can drink")
      : null;
// * tab for each : is for readability

/* 
  ? Switch Statement 
  * Execution of a block dependent of the case

*/

let teacher = "Paul";

switch (teacher) {
  case "Paul":
    console.log("Teacher is Paul");
    break;
  case "Sarah":
    console.log("Teacher is Sarah");
    break;
  default:
    console.log("Unknown teacher");
}

console.log(temp);

switch (true) {
  case temp >= 80:
    console.log("It's hot");

  case temp >= 60:
    console.log("It's warm");
}

// *Above logs both because we did not use a break statement

/* 
    ? FizzBuzz Challenge
    * create a variable called myNumber and assign it to any number
    * build a condition that checks the following:
    * if the number is divisible by 3, log "Fizz"
    * if the number is divisible by 5, log "Buzz",
    * if the number is divisible by both, log "Fizz Buzz"
    * if the number is NOT divisible by 3 or 5, log the number
    * rewrite as a ternary
    * rewrite as a switch
*/

let myNumber = 10;

if (myNumber % 3 === 0) {
  console.log("Fizz");
} else if (myNumber % 5 === 0) {
  console.log("Buzz");
} else if (myNumber % 3 === 0 && myNumber % 5 === 0) {
  console.log("Fizz Buzz");
} else {
  console.log(myNumber);
}

// ! logic error divisible by both 3 and 5 will not be print

if (myNumber % 15 === 0) {
  console.log("Fizz Buzz");
} else if (myNumber % 5 === 0) {
  console.log("Buzz");
} else if (myNumber % 3 === 0) {
  console.log("Fizz");
} else {
  console.log(myNumber);
}

// * Correct example
// * Write conditions from most to least restrictive

myNumber % 15 === 0
  ? console.log("Fizz Buzz")
  : myNumber % 5 === 0
    ? console.log("Buzz")
    : myNumber % 3 === 0
      ? console.log("Fizz")
      : console.log(myNumber);

switch (myNumber) {
  case myNumber % 15 === 0:
    console.log("Fizz Buzz");
    break;
  case myNumber % 5 === 0:
    console.log("Buzz");
    break;
  case mmyNumber % 3 === 0:
    console.log("Fizz");
    break;
  default:
    console.log(myNumber);
}
