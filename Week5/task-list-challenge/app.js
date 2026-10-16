/* 
Add Task button is clicked:

Get the value from taskInput
Create a new <li>
Set its text to the task entered by the user
Add the new <li> to taskList
Clear the input
*/

let taskInput = document.querySelector("#taskInput");

let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");

/*
 * let li = document.querySelectorAll(".taskList > li");
 * this will out put undefined
 */

/* 
? Paul's code
* for select all li inside tasklist
* let li = document.querySelectorAll(".taskList > li");
*/
let priority = document.getElementById("priority");
let priority_value;
let allTaskElements;
let taskListItem;
let alltaskListItem;
let allDeleteButton;
let deleteButton = `&nbsp;&nbsp;&nbsp;<button class="delete"> Delete</button>`;
/* 
  ? Paul's code
  * let deleteButton = document.create element("li")
  *  deleteButton.textContent = Delete
*/
let taskCounter = document.getElementById("taskCount");

let addTask = () => {
  let request = taskInput.value;

  if (!request) {
    return;
  }
  taskListItem = document.createElement("li");
  /*   
  ? paul's code: 
  *  taskListItem.classList.add(priority.value)
  ? .classList.add(...) means add one or more CSS classes to an HTML element in JavaScript.
*/
  taskList.appendChild(taskListItem);
  taskListItem.innerHTML = `<span class="task"> ${request} </span>`;
  taskInput.value = "";

  /* 
 2. Priority

Check the selected value from the `priority` dropdown.

Add the appropriate class to the new task:

- `normal`
- `important`
- `urgent`

Create CSS rules that visually distinguish the three priorities.

*/
  priority.addEventListener("change", function (event) {
    /*  console.log(event.target.value); */
    priority_value = event.target.value; // selected option value
  });
  switch (priority_value) {
    case "normal":
      // code block
      taskListItem.style.color = "blue";
      break;
    case "important":
      // code block
      taskListItem.style.color = "orange";
      break;
    case "urgent":
      // code block
      taskListItem.style.color = "red";
      break;
    default:
      // code block
      taskListItem.style.color = "blue";
      break;
  }
  taskListItem.innerHTML += deleteButton;
  allTaskElements = Array.from(taskList.querySelectorAll("li"));
  alltaskListItem = taskList.querySelectorAll(".task");
  allDeleteButton = taskList.querySelectorAll(".delete");

  /* 
   ? paul's code
   ? Need to put clicking event inside this event listener for live update
   * taskListItem.addEventListener("click", (e)=> {
       *  taskListItem.classList.toggle("completed");
    *  })
    !Ｕpdate as the listItem is created

   Can replace this below:
     alltaskListItem.forEach((task) => {
    task.addEventListener("click", (e) => {
      e.preventDefault();
         console.log("button clicked");
      task.classList.toggle("completed");
      if (task.classList.contains("completed")) {
        taskCounter.textContent = `${allTaskElements.length - 1} tasks remaining`;
      } else {
        taskCounter.textContent = `${allTaskElements.length} tasks remaining`;
      }
    });
  });
  */
  alltaskListItem.forEach((task) => {
    task.addEventListener("click", (e) => {
      e.preventDefault();

      task.classList.toggle("completed");
      if (task.classList.contains("completed")) {
        taskCounter.textContent = `${allTaskElements.length - 1} tasks remaining`;
      } else {
        taskCounter.textContent = `${allTaskElements.length} tasks remaining`;
      }
      /* 
      ? Paul's code
      * updateCount();
      */
    });
  });

  function render() {
    taskList.innerHTML = allTaskElements.map((item) => item.outerHTML).join("");
    taskCounter.textContent = `${allTaskElements.length} tasks remaining`;
  }

  allDeleteButton.forEach((delete_button) => {
    delete_button.addEventListener("click", (e) => {
      e.preventDefault();
      const deleted_item = e.target.closest("li");
      /* 
       ? Paul's code"
       * deleted_item.remove();
       * element.remove() → removes the whole element from the DOM
      */

      let newlist = allTaskElements.filter((s) => s !== deleted_item);
      allTaskElements = newlist;

      render();
      /* 
      ? Paul's code
      * updateCount();
      */
    });
  });

  taskCounter.textContent = alltaskListItem.length + " tasks remaining";
};

/* 
 ? No need addButton , listener on enter keydown should be on the input field
*/
taskInput.addEventListener("keydown", (evt) => {
  if (evt.key === "Enter") {
    addTask();
  }
});

addBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  addTask();
  /*
  ? paul's code: 
  * let taskInput = document.querySelector("#taskInput").value;
  * let priority = document.getElementById("priority").value;
  ! if use .value for getting live input value need to put inside event listener
*/
  // prevent button with type of submit to refresh , which is the default behaviour
  /*
  ? paul's code: 
  * if (input) {
    * return
   *}
  ? Not allow blank input
*/
});

/* 
      ? Paul's code
      * updateCount() function for calculate tasks remaining;
      */
let updateCount = () => {
  let allTasks = document.querySelectorAll("#taskList > li");
  let completed = document.querySelectorAll("#taskList > .completed");
  let remainCount = allTasks.length - completed.length;
  let emptyMsg = document.querySelector(".emptyMsg");
  if (!allTasks.length) {
    emptyMsg.style.display = "block";
    taskCounter.style.display = "none";
  } else {
    emptyMsg.style.display = "none";
    taskCounter.style.display = "block";
  }
  taskCounter.textContent = `${remainCount} tasks remaining`;
};
