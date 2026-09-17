/* 
    ? Document Object Model (DOM)
    * object style representation of what's on the screen
    * alllows you to access any element, sttribute, comment
    * it allows you to create new elements
    * it allows you to modify or remove existing elements
    * it is structured inside of an object
    * it has methods specifically designed designed to manipulate the DOM nodes
    ? For having access to the html tree
*/

console.log("This run within app.js");
console.log(document);
// output: entire HTML structure tree

//? Accessing a window
console.log(window);
// output: the browser window of HTML tree
console.log(window.history);
// output: history object on that page

//? Accessing navigator
console.log(navigation);

/* 
    ? Accessing elements in DOM
    * getElementById()
    * getElementsByClassName() 
    * getElementByTagName()
    * querySelctor()
    * *querySelectorAll()
*/

let h1 = document.getElementsByClassName("header");
console.log(h1);

// ? Changing element's attributes using document object values

h1[0];
console.log(h1[0]);

h1[0].style.color = "white";

let toDoItems = document.getElementsByClassName("to-do-items");

console.log(toDoItems);

toDoItems[0].style.color = "Blue";

// ! "array LIKE object", so can't use array method on this "array"
// toDOITEM.forEach(i => console.log(i))

for (item of toDoItems) {
  console.log(item);
  item.style.color = "Blue";
}

let postMe = document.getElementById("post-me-section");
console.log(postMe);

postMe.textContent = "Post Me";

//? We can access elements without hte use of these properties
console.log(document.body.children[1]);
// ! do not do this , becoz html structure change easily

let header = document.getElementsByTagName("h1");
console.log(header);

/*
    * HTML Collection
        * array-like (cannot use array method)
        * can use loops
        * is live
        * any changes are tracked

    * NodeList
        * Act link an array!
        * Not array Like object, which get by getElementById etc.
        * can use array methods (forEach, map, filter)
        * is not live, changes is lost
 */

let postMeSection = document.querySelector("#post-me-section");
let navBar = document.querySelector(".navigation");
console.log(navBar);

// ? Assigning objects into document object
Object.assign(navBar.style, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1em",
});
// * Assigning object {} into navBar's style!
// * More readable

let navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks);

navLinks.forEach((el) => (el.childNodes[0].style.color = "black"));

// ? querySelectorAll can use compound selectors
// * for example: .nav-link > a

let navAnchors = document.querySelectorAll(".nav-link > a");
console.log(navAnchors);
navAnchors.forEach((el) => (el.textContent = "1px solid black"));
navAnchors.forEach((el) => (el.style.fontSize = "24pt"));

/* 
  ? Creating HTML Elements
  * create an element using .createElement() method
  * adjust your element
  * append the element to the DOM using .append() or .appendChild()
*/

let footer = document.createElement("footer");
console.log(footer);

// After creating the element , append it !
let p = document.createElement("p");
// Afjust new element's properties
p.className = "copyright-text";
p.textContent = "Copyright 2026";

//added new p element to the footer element
footer.appendChild(p);

//added footer to our body
document.body.appendChild(footer);

/* 
    ? Challenge
    * hardcode a main element
    * hardcode a div inside with class img-container
    * create an img element
    * pass the url below to its src attribute
    * adjust its width, height, and object fit (set last to cover)
    * append it to the img-container div
    ! SPICEY MODE - create five of those pictures and then make sure they look good using flexbox
*/

let imgUrl =
  "https://plus.unsplash.com/premium_photo-1661962699932-1948aa1dde16?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

let mainElement = document.createElement("main");
let imgContainer = document.createElement("div");
imgContainer.className = "img-container";
let image = document.createElement("img");
image.src = imgUrl;

let imgStyle = {
  width: "50%",
  height: "auto",
  objectFit: "cover",
};
Object.assign(image.style, imgStyle);

// console.log(image);
postMeSection.appendChild(mainElement);
mainElement.appendChild(imgContainer);
imgContainer.appendChild(image);

/* 
    ? NodeList vs HTMLCollection
    * not live vs live
*/

let htmlCollection = document.getElementsByClassName("to-do-items");
let nodeList = document.querySelectorAll(".to-do-items");
console.log("HTML collections", htmlCollection);
console.log("Node List", nodeList);

let ul = document.getElementsByTagName("ul")[0];

let li = document.createElement("li");
li.className = "to-do-items";
li.textContent = "New To Do Item";

ul.appendChild(li);

/* 
    * HTMLCollection updates the color of the newly created element
    * NodeList will not update the color of the newly created element

*/

for (i of htmlCollection) {
  //   i.style.color = "red";
}

for (i of nodeList) {
  i.style.color = "red";
}
