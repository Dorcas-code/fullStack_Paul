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
let priority = document.getElementById("priority");
let priority_value;
let allTaskElements;
let taskListItem;
let alltaskListItem;
let allDeleteButton;
let deleteButton = `&nbsp;&nbsp;&nbsp;<button class="delete"> Delete</button>`;
let taskCounter = document.getElementById("taskCount");

addBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  // prevent button with type of submit to refresh , which is the default behaviour
  /*   console.log(email.value, pwd.value); */
  let request = taskInput.value;
  taskListItem = document.createElement("li");
  /*  taskListItem.className = "task"; */
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

  alltaskListItem.forEach((task) => {
    task.addEventListener("click", (e) => {
      e.preventDefault();
      /*     console.log("button clicked"); */
      task.classList.toggle("completed");
      if (task.classList.contains("completed")) {
        taskCounter.textContent = `${allTaskElements.length - 1} tasks remaining`;
      } else {
        taskCounter.textContent = `${allTaskElements.length} tasks remaining`;
      }
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
      console.log(allTaskElements);
      console.log(deleted_item);
      let newlist = allTaskElements.filter((s) => s !== deleted_item);
      allTaskElements = newlist;

      render();
    });
  });

  taskCounter.textContent = alltaskListItem.length + " tasks remaining";
});

function deleteItem(array, item) {
  let newlist = array.filter((s) => s !== item);
  return newlist;
}
