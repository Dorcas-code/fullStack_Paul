let input = document.querySelector("#taskInput");
let post = document.querySelector("#post");
/* let priority = document.querySelector("#priority"); */
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");
let sortLike = document.querySelector("#sortLike_Btn");
let sortUser = document.querySelector("#sortName_Btn");

let taskCounter = document.getElementById("taskCount");
let clearCompleted = document.querySelector("#clearCompletedBtn");
let allDeleteButton;

function render() {
  const allTaskElements = taskList.querySelectorAll(".card");
  if (taskList.querySelectorAll(".card").length < 2) {
    taskCounter.textContent = `${taskList.querySelectorAll(".card").length} feed`;
  } else {
    taskCounter.textContent = `${taskList.querySelectorAll(".card").length} feeds`;
  }
}

let likePost = () => {
  let likeCount = 0;
  let likeBtn = document.createElement("button");
  likeBtn.innerHTML = `Like <span class="num">${likeCount} </span>`;

  likeBtn.addEventListener("click", () => {
    likeCount = likeCount + 1;
    likeBtn.innerHTML = `Like <span class="num">${likeCount} </span>`;
  });

  return likeBtn;
};

let deletePost = () => {
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `<span class="delete">Delete</span>`;

  deleteBtn.addEventListener("click", (e) => {
    const deleted_item = e.target.closest("div");
    deleted_item.remove();
    render();
  });

  return deleteBtn;
};

let createPost = () => {
  let inputValue = input.value;
  let postValue = post.value;
  allTaskElements = Array.from(taskList.querySelectorAll(".card"));
  if (!inputValue || !postValue) {
    return;
  }

  let newPost = document.createElement("div");

  newPost.innerHTML = `<b><span class="userName">${inputValue}</span></b><br><br>${postValue} <br><br>`;
  newPost.classList.add("card");

  newPost.appendChild(likePost());

  newPost.appendChild(deletePost());
  taskList.appendChild(newPost);

  render();
  input.value = "";
  post.value = "";
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    createPost();
  }
});

addBtn.addEventListener("click", (e) => {
  createPost();
});

sortLike.addEventListener("click", (e) => {
  const items = Array.from(taskList.querySelectorAll(".card"));

  items.sort((a, b) => {
    const numA = Number(a.querySelector(".num").textContent);
    const numB = Number(b.querySelector(".num").textContent);
    return numA - numB;
  });

  items.forEach((item) => taskList.appendChild(item));
});

sortUser.addEventListener("click", (e) => {
  const items = Array.from(taskList.querySelectorAll(".card"));

  items.sort((a, b) => {
    const nameA = a.querySelector(".userName").textContent;
    const nameB = b.querySelector(".userName").textContent;
    return nameA.trim().localeCompare(nameB.trim());
  });

  items.forEach((item) => taskList.appendChild(item));
});
