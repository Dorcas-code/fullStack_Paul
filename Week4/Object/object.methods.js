/* 
    ? Object Methods
    * functions working on specific object
    * deal with scope
        * global (outside)
        * this (inside) (allows access to the correct scope)

*/

let student = {
  name: "Dave",
  class: "fullstack -11",
  isErolled: true,

  // method as a function call
  showName() {
    return this.name;
    // ? or student.name
    // ? if return name;
    // ! will out undefined
  },

  // method as property and function declaration
  modifyEnrollment: function (enrolled) {
    return (this.isEnrolled = enrolled);
  },
  // * Method inside object that is in key-value style

  // method as arrow function
  modifyClass: (newClass) => {
    this.class = newClass;
    // !this dun works
    student.class = newClass;
    // * this works!
  },
  // ? arrow dunction do not bund to this or super() !!!!!
  // ! DO NOT USE this inside arrow function!!!!

  //* how to see this!
  seeThis: function () {
    return this;
  },
};

console.log(student);

// ? Function that perform a task

function updateName(obj, name) {
  let result = obj;
  result.name = name;
  return result;
}

// ? This is functional programming
student = updateName(student, "Paul");
console.log(student);

// ? Object Oriented Programming -requires methods to modify objects

// ? This outside function polutes you scope

let cookies = ["chocolate chip", "walnut", "snickers"];

updateName(cookies, "cookie");
//output: [ 'chocolate chip', 'walnut', 'snickers', name: 'cookie' ]
// ! pollute the stucture of the object!

console.log(student.showName());

let resultPfMethod = student.modifyEnrollment(false);

student.modifyClass("potato");
console.log(student);
console.log(student.seeThis());

/* 
    ? Challenge
    * create an object called toDoList
    * give it the following properties:
        * urgent
        * todo
        * completed
    * all three should be assigned a value of an empty array
    * create a method called add
        * add will take one parameter
        * it will add said parameter to the todo list
    * create a method called checked
        * it will take one param
        * it needs to check if that param exists in todo array
        * if it does, move it to completed
    * create a method called removeToDo
        * it will take one param
        * it will check if the param exists inside todo array
        * if it does, it will remove it
        * EXTRA: return the removed item
        * assign it to a variable called removedItem
    * create a method called prioritize
        * it will take one param
        * it will check if todo array has said item
        * if it does, move it to urgent
    * create a method called clearAll
        * this method will clear all three of the arrays
*/

let toDoList = {
  todo: [],
  urgent: [],
  completed: [],

  add(item) {
    this.todo.push(item);
  },
  checked(item) {
    for (i of this.todo) {
      if (item === i) {
        this.completed.push(item);
      }
    }
  },
  removeToDo(item) {
    let removedItem;
    for (i of this.todo) {
      if (item === i) {
        this.todo = this.todo.filter((remove_todo) => remove_todo !== item);
        removedItem = item;
        return removedItem;
      }
    }
  },
  // ? Paul's solution start //

  //helper method
  foundItem(item, arrayToDo) {
    let result = null;
    let exist = this[arrayToDo].filter((i) => i === item);
    /* 
     ? Accessing object Properties

    console.log(bentley.breed, bently["breed"]);

*   using  array notation
    */

    if (exist.length) {
      result = exist;
    }
    return result;
    // console.log(this[arg]);
  },

  checked_paul(item) {
    let exists = this.foundItem(item, "todo");
    // or can do with below method
    // let exists_include = this.todo.includes(item);
    //console.log(exists);
    if (exists) {
      this.completed.push(item);
      this.todo = this.todo.filter((remove_todo) => remove_todo !== item);
    }
  },

  removeToDo_Paul(item) {
    let result = null;
    const index = this.todo.indexOf(item);
    console.log(this.todo.splice(index, 1)[0]);
    if (index !== -1) {
      result = this.todo.splice(index, 1)[0];
    }
    return result;
  },
  // Tips : step by step more easy to debug
  prioritize_Paul(item) {
    let exists = this.foundItem(item, "todo");
    if (exists) {
      this.urgent.push(item);
    }
  },

  // ? Paul's solution end //
  prioritize(item) {
    for (i of this.todo) {
      if (item === i) {
        this.urgent.push(item);
      }
    }
  },

  clearAll() {
    this.todo = [];
    this.urgent = [];
    this.completed = [];
  },
};
