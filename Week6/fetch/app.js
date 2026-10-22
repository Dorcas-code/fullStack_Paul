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

/* 
 ? Fetch with Async Await and Try Catch
*/
let main = document.querySelector("main");
let search_bar = document.querySelector("#search");
// * get the input to eventlistener to do sth
search_bar.addEventListener("keyup", (e) => {
  let itemsContainer = document.querySelectorAll(
    ".card.item-container.my-2.mx-2",
  );
  let items = document.querySelectorAll(".card-body");

  itemsContainer.forEach((items) => {
    const text = items.childNodes[0].textContent.toLowerCase();
    // text = all text inside the card div
    const query = e.target.value.toLowerCase();
    if (text.includes(query)) {
      items.style.display = "block";
    } else {
      items.style.display = "none";
    }
  });

  /*   console.log(e.target.value); */
});

function render(data) {
  data.forEach((element) => {
    /* console.log(element.name); */
    // * all instance of data has the following elements
    let div = document.createElement("div");
    div.className = "card item-container my-2 mx-2";
    let divBody = document.createElement("div");
    divBody.className = "card-body ";
    let h3Name = document.createElement("h3");
    h3Name.className = "card-title text-primary";
    h3Name.textContent = element.name;
    let p = document.createElement("p");
    p.className = "card-subtitle mb-2 text-body-secondary";
    p.textContent = `Status: ${element.description}`;
    let date = document.createElement("p");
    date.className = "date";
    let pUp = document.createElement("p");
    pUp.className = "card-text";
    pUp.textContent = `Last Updated: ${element.updatedAt}`;
    let div_issues = document.createElement("ul");

    div_issues.className = "list-group list-group-flush";

    if (element.recentIncidentBriefs) {
      element.recentIncidentBriefs.forEach((e) => {
        let p_issues = document.createElement("li");
        p_issues.className = "list-group-item";

        p_issues.textContent = `impact: ${e.name} - ${e.impact}`;

        div_issues.append(p_issues);
      });
    }
    divBody.append(h3Name, p, pUp, date, div_issues);
    div.append(divBody);
    main.appendChild(div);
  });
}

function handleError(err) {
  console.error(err);
  let error_container = document.querySelector(".error-panel");
  error_container.style.display = "block";
  error_container.lastElementChild.textContent = err.message;
}

let getData = async () => {
  try {
    let res = await fetch(url);
    // * go to url, by right click -> go to definition
    // * the fetch function return a promise
    // * so need toadd await
    let data = await res.json();
    // * jsonify the promise
    // * this return a promise too so need to add await too
    let parsed_data = data.services;
    // * seperate HTML elements from data fetching
    render(parsed_data);
    return parsed_data;
  } catch (err) {
    handleError(err);
  }
};
getData();

/* 
let parsed_data = getData();
show_data.innerHTML = `<p>${parsed_data}</p>`; */

/* 
    ? Challenge
    * parse thru the data
    * build blocks that display the following:
        * name
        * description
        * updated date
        * recent issues
    ! SPICEY MODE
    * add an input field and a button
    * as you type, the search removes all irrelvant blocks
*/
/* let show_data = document.querySelector("#show_data");
let show_data_recentIssues = document.querySelector("#show_data_recentIssues");
let html = "";
let render = async () => {
  let parsed_data = await getData();
  let parsed_issue = parsed_data.recentIncidentBriefs;

  show_data.innerHTML = `<p>name: ${parsed_data.name}</p><p> description: ${parsed_data.description}</p><p>  updated date: ${
    parsed_data.updatedAt
  }</p>`;

  (parsed_issue.forEach((n, index) => {
    html += `<p> issue ${index} : ${n.name}</p>`;
  }),
    (show_data_recentIssues.innerHTML = html));
};

render();
 */
