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
