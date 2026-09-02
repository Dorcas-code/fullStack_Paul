/* 
 ? Loops
 * allow us to execute a block of code repeatedly until an exit condition has been met
 * five types of loops
    * for 
    * for of 
    * for in
    * while 
    * do while
* Syntax

 for (expression) {
   code block
 }
  
 * store expression can be start ; stop ; step or iterator: iterate
 * i++ is short hand of i = i + 1 
 * iterator (ex: i) value placeholder for current loop state
 * iterable ( ex: todo's) is a list of items that we can loop over
*/

/* 
  ? for loop
*/

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let longWordEN = "sdfkjweofjaefnaefinewoijfwoeijf";

//start    //stop              //step
for (let i = 0; i < longWordEN.length; i++) {
  console.log(longWordEN[i]);
}

/* 
for (let i = 0;  longWordEN.length; i++) {
  console.log(longWordEN[i]);
}
  !this will cause infinite loop
  ? becuase will never meet the length of longWordEN

*/

/* 
 ? Challenge - reverse the string
 ! Spicey mode - add the result to a variable called reverResult
*/

let result = "";

//start    //stop              //step
for (let i = longWordEN.length - 1; i >= 0; i--) {
  result = result + longWordEN[i];
}

console.log(result);

/* 
     ? For in loop
     * simple
     * No start , stop, just iterable and iterator
     * returns an index value
*/

for (i in longWordEN) {
  console.log(`${i} - Value: ${longWordEN[i]}`);
}

// ? Quick Challenge - remove all vowels from the word and return a new vowel-less word
// letters: A, E, I, O, U:
// ! Spicey Mode - what if the letters are uppercase or lowercase?

// if word[i] === "a", we use | or
// if word[i] !== "a" , we use && and
// If we use or in !== it would only remove 1 vowel
function removeVowel(word) {
  let result = "";
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
      result = result + "";
    } else {
      result = result + word[i];
    }
  }
  return result;
}

removeVowel("apple");

// if word[i] !== "a" , we use && and
// If we use or in !== it would only remove 1 vowel
function removeVowel(word) {
  let result = "";
  for (i in word) {
    if (
      word[i] !== "A" &&
      word[i] !== "a" &&
      word[i] !== "E" &&
      word[i] !== "e" &&
      word[i] !== "O" &&
      word[i] !== "o" &&
      word[i] !== "U" &&
      word[i] !== "u"
    ) {
      result = result + word[i];
    }
  }
  return result;
}

removeVowel("apple");

/* 
     ? For of loop
     * just like for of 
     * return the value instead of the index
     
*/

for (letter of longWordEN) {
  console.log(letter);
}

//output : f,w,e,v,s,a,w,f,a,a,w

/* 
     ? While loop
     * execute a statement inside of a code block 
     * if does so until it meets its stop condition
     
     * syntax: while (true) { do this}
     
*/

while (true) {
  // do something
}

let count = 0;

while (count <= 10) {
  console.log(count);
  count++;
}

let countback = 10;

while (countback >= 0) {
  console.log(countback);
  countback--;
}

/* 
     ? Do While loop
     * execute code in the do section
     * do this while condition remain true
     * at least do once
     ! one way to get Paul roll his eyes at you is to use this monstrosity
     
*/

let doCount = 0;

do {
  console.log(doCount);
  doCount++;
} while (doCount <= 10);
