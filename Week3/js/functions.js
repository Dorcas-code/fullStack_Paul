/* 
  ? Functions
  * a block of reusable code
  * take parameters
  * perform an action
  * return a result
    * return is for getting something out of the function :)
    ! the defalut return value of a function is undefined     
  
  * function declaration
  * function expression
    * expression function
    * arrow function
    * block function
* Immediately invoked Function Expression (IIFE)
* 
* syntax
  
  function identifier (parameter, parameter,....) {
    function code block
    return statement
  }
*/

// Function decalration
function sayHello() {
  console.log("Hellp fullstack 11 folks");
  return "Hellp full stack 11 folks actully being returned";
}
//* Does this function return anything?
//* No! console.log() is just logging things we can see, it does not has a return keyword

//Function invocation or calling a function
sayHello();

let resultFromFunction = sayHello() + "potato";

console.log("this is the actual result", resultFromFunction);

// ? Parameters are like doors into your function

function addNums(num1, num2) {
  let result = num1 + num2;
  console.log(result);
}

// ? Values passed into parameters are called arguments
addNums(2, 3);
//output : 5
// As there is console.log to log the 5 for human to see

console.log(addNums(2, 3));
//o utput: 5 and undefined
// When the function is passed into another thing,
// it need to return something , so it return undefined
// if you are developing this is ok, but if making it to a HTML or other things
// you need to make your function return something

/* 
 ? Function Expression
 * utilises a variable as an identidier
*/

let concatStrings = function (str1, str2) {
  return str1 + " " + str2;
  /* 
     * return str1 , str2; 
     ! will only returns one
  */
};

console.log(concatStrings("Yellow", "Banana"));

/* 
 ? JavaScript Challenge: Count the Vowels

 * Goal

 * Write a function that counts how many vowels are in a word.

*/

let countVowels = function (word) {
  let count = 0;
  for (i in word) {
    if (
      (word[i] === "A") |
      (word[i] === "a") |
      (word[i] === "E") |
      (word[i] === "e") |
      (word[i] === "O") |
      (word[i] === "o") |
      (word[i] === "U") |
      (word[i] === "u")
    ) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("apple"));

// * Another way use for...of

let countVowels_forOf = function (word) {
  let count = 0;
  for (i of word) {
    if (
      (i === "A") |
      (i === "a") |
      (i === "E") |
      (i === "e") |
      (i === "O") |
      (i === "o") |
      (i === "U") |
      (i === "u")
    ) {
      count++;
    }
  }
  return count;
};

console.log(countVowels_forOf("apple"));

/* 
 ? Arrow Functions
 * introduced in ES6
 * think of them as tenaries but for functions
 * do not bind to this or super (we will talk about it later)
*/

/* 
 ? Concise 簡潔 Functions
 * has one or no parameter
 * defined by => in lieu body
 * can have () or none
 * code block does not have {}
 * return statement are implicit here not explicit
*/

let greetEverone = () => "Welcome Everyone";
console.log(greetEverone());

let isUser = (bool) => (bool ? "isUser" : "NotUser");
console.log(isUser(true));
console.log(isUser(false));

/* 
  ? Block Body
  * can have many parameters
  * has a block of code
  * has explicit returns
*/

let reversStr = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }

  return result;
};

console.log(reversStr("mary had a little lamb"));

/* 
  ? IIFE
  ? (Immediately Invoked Function Expression
  * runs immediately without a need of invocation
  * fires right away
  * Do not have a name as it no need to be called
  * Rarely use
  * they are considered a niche 小眾 or uncommon pattern.
*/

(function () {
  console.log("IIFE");
})();
/*
 * inside a parathesis
 * and fired with a empty () at the end
 */

/*
    ? Fizzbuzz challenge
    Create a function that takes a parameters called start and stop.
    Loop over numbers from start to stop
    If the number is divisible by 3, print "Fizz"
    If the number is divisible by 5, print "Buzz"
    If the number is divisible by 3 and 5, print "Fizz Buzz"
    If the number is not divisible, print the number only
    Invoke your function to make sure it works.
*/

let FizzBuzz = (start, stop) => {
  let interval = stop - start + 1;
  for (let i = start; i <= interval; i++) {
    if (i % 15 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 5 === 0) {
      console.log("Fizz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

FizzBuzz(1, 15);
