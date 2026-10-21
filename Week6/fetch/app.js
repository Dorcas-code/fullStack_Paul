/* 
 ? fetch API
 * asynchronous function
 * we need it because we don't know how long fetching data will take
 * we wait until our Promise is resolved or rejected
 * fetch allows us to handle the data in three states
    * pending - hasn;t finished
    * success - finished
    * failed - not finished (due to network problems or time-to-live(TTL))

*/

/* 
    * JSON JavaScript Object Notation
        * we think of it as an object
        * is a strong representation of an object
        * example: "{"name":"Paul","age":"27"}""
        * easier for transmission, data are packed into ReadableStrean object
        * it needs JSONified

*/
//  .then() = “run this later with the result.”
// For cleaner looking code
let url = "https://prismix.dev/api/v1/statuses";
let wrongUrl = "httcps://prismix.dev/api/v1/statuses";

let notjsonify_Result = fetch(url).then((d) =>
  console.log("notjsonify_Result ", d),
);
// Response {type: 'cors', url: 'https://prismix.dev/api/v1/statuses', redirected: false, status: 200, ok: true, …}

let jsonify_Result = fetch(url).then((d) =>
  d.json().then((result) => console.log(result)),
);
//output: it is an promise<pending> , but in object not json, and bject can be used!
// *  .then() = “run this later with the result.”
// * fetch () will return a promise
// * we need to resolve it

fetch(wrongUrl)
  .then((d) => d.json())
  .then((result) => console.log(result))
  .then(() => console.log("this code runs after first then resolve"))
  // this not run if promise not resolved
  .catch((error) => console.log(error))
  .finally(() => console.log("this code runs after then's and catch's"));
// * .finally runs when all then and catch is run

/* 
    ? fetch Process
    *1. fetch grabs your resource and returns Promise object
    * Promise can be pending, fulfilled or rejected
    * 2. use .then() resolver to strip the Promise 
    * we catch the data in the parameter of the callback function (response)
    * reponse is useless as its encapsulated
    * 3. use Response.json() method to read and strip its Promise
    * catch it into a parameter and do as you please with the data
    * 5. use .catch() to deal with any error handling

*/
