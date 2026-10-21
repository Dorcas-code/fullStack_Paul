/* 
    ? What is API?
    ? Application Programming Interface (API)
        * You dun go to the kitchen directly and yell for food
        * waiter / waitress of restaurant
        * collect your order to bring it to the kitchen
        * A way for us to communicate with a server
    * Client and server
        * client (front-end)
            * browser, curl command, postman request
            * curl is a build in tool to send rewquest
            * eg. in terminal type curl www.google.com
        * server (back-end)
            * a compuuter that has a listener setup that listens for requests
            * it serves up responese
        *   Customer and the kitchen!
    * enables a RESTful architecture request/response LiftStyle
        * REST = representional state trannsfer
        * a way tp communicate in req/res form
        * * JSON specific
        * stateless
    * SOAP - Simple Object Access Protoacol
        * a way to communicate in req/res form
        * XML specific
        * stateful
    * request - data we send (as the client)
        * headers {metadata}
        * query parameters (GET)
        * body (POST) 
    * response - data we revieve (as the server)
        * headers
        * payload
        * status code
    * REST & SOAP work vis VRUD
        * create (POST, GET)
        * read (GET)
        * update (PUT)
        * delete (DELETE)
    * correspond to the following  HTTP Methods or HTTP Verbs
        * POST
        * GET
        * PUT
        * DELETE 
*/
/* 
    ? Client is browser send request to server for google.com
    ? Server send back the google page to use as response
*/

/* 
  ? Synchronous Programming
    * synchronous code runs in order, top to bottom, left to right
*/

console.log("First");
console.log("Second");
console.log("Third");
// output: First, Second, Third

/* 
  ? Asynchronous Programming
  * A way for us continue our application without waiting
  * synchronous code runs in order, top to bottom, left to right
  * any asybchronous code waits until it's execution succeded
*/

console.log("First");
setTimeout(() => {
  console.log("Second");
}, 2000);
// JS does't stop for setTimeout, it executes the code nad lets timeout finish
console.log("Third");
// output: First, Third, Second

// Pretend get data from Database
function getUser() {
  setTimeout(() => {
    return { name: "Paul", email: "paul@gmail.com" };
  }, 2000);
}

let user = getUser();
console.log("The result of the user", user);
// ! return The result of the user undefined
// * This happen become we call the function getUser(), before return { name: "Paul", email: "paul@gmail.com" }
// * getUser() fired on 1s, and return { name: "Paul", email: "paul@gmail.com" } on 2s

/* 
    ? Promise
    * Promise can solve the above issue
    * allow us to handle the following states:
        * pending state (nothing happened yet)
        * fullfillment state (success)
        * reject state (errpr)
*/

// * Create new promise object
let promise = new Promise((resolve, reject) => {});
console.log(promise);
// output : Promise (pending)

let promise_Paul = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Paul", email: "paul@gmail.com" });
  }, 2000);
});
console.log(promise_Paul);
// output: Promise (fulfilled), will the object { name: "Paul", email: "paul@gmail.com" }

function GetUserUsingPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Paul", email: "paul@gmail.com" });
    }, 2000);
  });
}

let promiseResult = GetUserUsingPromise();
// output: Promise (fulfilled), with the object { name: "Paul", email: "paul@gmail.com" } inside

// ? How to get the data out from Promise
// * By Promise Resolvers!
/* 
    ? Promise Resolvers
    * a method which can be used on a Promise
    * it extracts the data once a Promise has settled from its pending state
*/
GetUserUsingPromise().then((user) => console.log(user));
// output:  { name: "Paul", email: "paul@gmail.com" }
// * output the data directly!
// * .then() extract the data directly
// * .then() handles success and cataches resolve
// * . catch() handles failures and catches rejeects
// * both take a callback function where param holds resolve/reject argument

/* 
    ? Promise reject
    * a method which can be used on a Promise
    * it return something if the Promise did not work
*/

function GetUserUsingPromise(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      setTimeout(() => {
        resolve({ name: "Paul", email: "paul@gmail.com" });
      }, 2000);
    } else {
      reject([{ statue: 500, messaage: "Failed" }]);
    }
  });
}

GetUserUsingPromise(false)
  .then((user) => user.forEach((u) => console.log(u)))
  .catch((err) => console.log(err));

/* 
    ? Async Await
    * it is an "async- type" function allowing you to return a promise
    * have access to:
    * await - resolves a promise 
    * await replaces .then()
    * .catch() can be replaced by try() catach()
    ! catch await only works inside asynchronous functions
 */

function regularFx() {
  return;
}
console.log("regular function", regularFx());
// * output: undefined

async function asyncFx() {
  return;
}

console.log("async function", asyncFx());
// * output: A promise object!

/* 
  ? Try Catch
  * a way to handle success AND rejection inside async (or regular functions)
  * try takes all of the "happy code"
  *  catch takes a parameter which will "catch" the error
  *  the code block withini catch handles your error state logic
  */

async function Start() {
  try {
    let userResultWithoutAwait = GetUserUsingPromise(true);
    console.log("No await Result", userResultWithoutAwait);
    /* 
   * No await keyword, also output a promise but pending
   * No data returned

  */

    let userResult = await GetUserUsingPromise(true);
    console.log("REsult", userResult);
    /*
     * output the required data:
     *  'REsult' { name: 'Paul', email: 'paul@gmail.com' }
     */
  } catch (error) {
    console.log("this is the error", error);
  }
  /*
   * if  let userResult = await GetUserUsingPromise(false);
   * output:
   * 'this is the error' [ { statue: 500, messaage: 'Failed' } ]
   */
}

Start();

/* 
    ? Challenge
    * you have two functions
    * one returns an individual based on username
    * the other returns all of their posts
    * create a function (or use resolvers)
    * first get the username of a person of your choice
    * then get all of their posts
    * notice these need to run in order
*/

let db = [
  { username: "paul", password: "potato" },
  { username: "shreya", password: "password123" },
  { username: "chris", password: "imkool123" },
];

let posts = [
  { user: "paul", post: "i'm so cool" },
  { user: "shreya", post: "i love coding" },
  { user: "paul", post: "i'm tired" },
  { user: "chris", post: "i'm gonna go racing this week" },
  { user: "chris", post: "i need to sleep more" },
];

// async await function must return a promise
// how to make getUsername run first then getPosts

async function getUsername(username) {
  return db.find((u) => u.username === username);
}

async function getPosts(user) {
  return posts.filter((p) => p.user === user);
}

async function getNameAndPosts(myUser) {
  try {
    const result = await getUsername(myUser);
    /*     if (typeof result === "object") {
      console.log(await getPosts(myUser));
    } */
    let data = await getPosts(result.username);
    console.log(data);
  } catch (error) {
    console.log("No such user", error);
  }
}

getNameAndPosts("chris");

// Another way to do this with .then()
let myresult = getUsername("paul").then((d) =>
  getPosts(d.username).then((i) => console.log(i)),
);
// * in .then(the promise is resolved)
