/* 
    ? Event Listensers
    * document method that listen for an event
    * when an event occurs, a callback fx fires
    * .addEventLister("event"m callbackFx)

    ? Callback Function
    * a function that fires when an event occurs
    * the event is not under our control
*/

let modeBtn = document.getElementsByClassName("screen-mode")[0];
// modeBtn.style.color = "red";
//This will cause type error
// As it is inside an array

console.log(modeBtn);
console.dir(modeBtn);
// Display the list of properties of that object

let darkMode = false;
// Not light mode

modeBtn.addEventListener("click", (evt) => {
  // ? Evt holds event that was fired by the listener
  console.log(evt);

  let lightStyle = {
    backgroundColor: "white",
    color: "black",
  };

  let darkStyle = {
    backgroundColor: "black",
    color: "white",
  };
  if (darkMode) {
    // Object.assign(document.body.style, darkStyle);
    document.body.className = "black-mode";
    console.log("dark");
  } else {
    // Object.assign(document.body.style, lightStyle);
    document.body.className = "light-mode";
    console.log("light");
  }
  darkMode = !darkMode;

  darkMode
    ? (evt.target.textContent = "Light Mode")
    : (evt.target.textContent = "Dark Mode");
});

// Logic for form
/* 
  ? Forms
  * are not just pretty way to ingest data
  * they're very powerful
  * allow to send a request using the action attribute
  * any inputs in the form have name attributes
    * used to define keys or properties
    * anything filled out in the form is transmitted
  * when we hit a button with the action of submit, the form triggers
  * the form sends a request (POST or GET ) into the action specified (url)
  * we need to supress form's inherent event if we don't want page reload
          *response result action from the element
          * use .preventDefault() on the event 
          * add attribute onsubmit="return false" to the FORM! (not your button)
  
  ? Query Params
  *https://www.scalenut.com/blogs/url-query-parameters
  * starts with ?
  * each key value pair seperated by &
  * in key-value pair
    * email is key, input value is value
    * password is key, input passwird is value
    * e.g. ?email=asd%40123.com&pwd=sdsd
  
*/

let db = [
  { email: "paul@codecademy", password: "dblocal" },
  { email: "chris@gmail.com", password: "wefij123" },
  { email: "shreya@ceo.com", password: "lokefwjne12" },
];

let output = document.querySelector(".output");

function searchUser(req, database) {
  return database.filter((i) => i.email === req.email);
}

function validatePassword(reqPassword, dbpwd) {
  if (reqPassword === dbpwd) {
    return { success: true, message: "User Logged In" };
  }
  return { success: false, message: "Invalid password" };
}

function render(obj) {
  if (obj.success) {
    output.textContent = obj.message;
  } else if (obj.success === false) {
    output.textContent = obj.message;
  } else {
    console.log("this runs");
    output.textContent = obj;
  }
}

let email = document.querySelector(".email");
let pwd = document.querySelector(".pwd");
let authBtn = document.querySelector(".authBtn");

function newAuthService(req, database) {
  let foundUser = searchUser(req, database);
  /*  console.log(foundUser[0].password); */
  /*  console.log(req.password); */
  if (foundUser.length) {
    let result = validatePassword(req.password, foundUser[0].password);
    return render(result);
  }
  return render("No such User");
}

console.log(email.value);
// Nothing happan

authBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  // prevent button with type of submit to refresh , which is the default behaviour
  /*   console.log(email.value, pwd.value); */
  let request = {
    email: email.value,
    password: pwd.value,
  };

  console.log(newAuthService(request, db));
});
// Can log the email value
