/* 
    ? Object
    * reference data type
    * denoted by { }
    * unlike array, no indexes
    *  has keys or properties
    * properties are denoted by. (eg. length)
    * has methods denoted by () (eg. toUpperCase())
    * has .this keyword
    * used for when data has to be recalled by same name
*/

//* Object Literal

let obj = {};
console.log(Boolean(obj));
// output: true
console.log(Boolean(obj.length));
// output: undefined, as object has no length)

let bentley = {
  // property : value
  // key : value pairs
  species: "dog",
  color: "black",
  name: "Bentley",
  spayedNeutered: true,
  breed: "olde english",
  weight: 78,
  favoriteActivity: ["farting", "fetching"],
};

console.log(bentley);

// ? Accessing object Properties

console.log(bentley.breed, bently["breed"]);

//using dot notation and array notation

// not indexable
console.log(bentley[0]);
// output: undefined

// ? Assigning property
bently.owner = "Paul";
console.log(bentley);

// ? Reassigning property

bently.color = "spotted";
console.log(bentley.color);
// output: from black and white to spotted

// ? We can convert object into an array (kinda)
let objProperties = Object.keys(bentley);
console.log(ojProperties);
// output: bentley object keys in array

let objValues = Object.values(bentley);
console.log(objValues);
// output: bentley object values in array

let favoriteActivityValuesIfExist = Object.keys(bentley);
favoriteActivityValuesIfExist.forEach((i) => {
  if (i === "favoriteActivity") {
    console.log(bentley[i]);
  }
});

// ? Challenge - what's the length of Bently's object

console.log(Object.keys(bentley).length);

let request = {
  email: "paul@codecademy.com",
  password: "dblocal",
};

let db = [
  { email: "paul@codecademy", password: "dblocal" },
  { email: "chris@gmail.com", password: "wefij123" },
  { email: "shreya@ceo.com", password: "lokefwjne12" },
];

// ? How would I list all emails in my database?

db.forEach((i) => console.log(i.email));

/* 
    ? Challenge
    * create an authentication service
    * it should take an incoming request and parse it
    * it should then check if the individual exists
    * if they don't, console.log user not found
    * it they do exist, check if their password matches
    * if it doesn't, console.log invalid password
    * if it does, console.log user logged in
    * 
    ! SPICY MODE
    * handle malforned reques (what if email or password is missing
    * what if someone types in Paul@codecademy.com
    * How do you ensure successful username search

*/

let authService = (req, database) => {
  database.forEach((i) => {
    if (req.email !== "" && req.password !== "") {
      if (i.email === req.email) {
        console.log("user found !");
        if (i.password === req.password) {
          console.log("logged in");
        } else {
          console.log("Invalid Password");
        }
      } else {
        console.log("user not found");
      }
    } else {
      console.log("please fill it username or password");
    }
  });
};

authService(request, db);
/* 
output: 
'paul@codecademy.com'
'chris@gmail.com'
'shreya@ceo.com'
'user found !'
'logged in'
'user not found'
'user not found'
*/

let authService_filter = (req, database) => {
  let foundUser = database.filter((i) => i.email === req.email);
  if (foundUser) {
    console.log("user found");
    if (foundUser[0].password === req.password) {
      console.log("user logged in");
    } else {
      console.log("Invalid password");
    }
  } else {
    console.log("user not found");
  }
};

authService(request, db);

// ? Auth Service but More elegent

function searchUser(req, database) {
  return database.filter((i) => i.email === req.email);
}
function validatePassword(reqPassword, dbpwd) {
  if (reqPassword === dbpwd) {
    return { success: true, message: "User Logged In" };
  }
  return { success: false, message: "Invalid password" };
}

function newAuthService(req, database) {
  let foundUser = searchUser(req, database);
  console.log(foundUser[0].password);
  console.log(req.password);
  if (foundUser.length) {
    return validatePassword(req.password, foundUser[0].password);
  }
}

console.log(newAuthService(request, db));
