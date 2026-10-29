/* 
    ? Router
    * an object handling routing and middleware only
    * helps with scope pollution (access to all methods when not needed )


    ? Basic Routing
    * router.method() handles reconnet type (get, POST, PATCH, PUT, DELETE,etc.)
    * endpoint
    * callback with business logic and req/res as parameter
    * response is then sent
    */

//import express and invoke its router interface
const router = require("express").Router()


/* 
  ? GET request
  * has header and the endpoint
*/

router.get("/health", (req, res) => {
    /*     console.log(req); */
    res.status(200).json({
        message: "ther server is up and running"
    })
})

/* 
  ? POST request
  * comes with a body
  * body holds a payload
*/

router.post("/postroute", (req, res) => {
    let name = req.body.name

    res.status(200).json({
        message: `this is the post route", ${name}`
    })
})

/* 
 ? Quick Challenge: don't hardcode method in message. Where could you get its name?

*/
router.put("/", (req, res) => {
    console.log(req)
    res.status(200).json({
        message: `You hit the ${req.method} route`
    })
})

router.delete("/", (req, res) => {
    res.status(200).json({
        message: `You hit the ${req.method} route`
    })
})
//exprts all modified content of the object to access elsewhere
module.exports = router
// * For this to work need to import it to app.js

/* 
  ? Query Params
  * is a key-value pair added to the end of a URL after ?
  * Query parameters let the client send small values in the URL
  * we can pass key value pairs into our server
  * great for filtering , searching, sorting or pagination 
  ! if there is sensitive data do not use query params
  * example below: 
*/

router.get("/filter", (req, res) => {
    console.log(req.query);
    /*  res.status(200).json({
         message: "ther server is up and running"
     }) */
    /* 
        ? Object Destructuring
        * a way to extract properties from an object
        * save us repeating ourselves 
    */

    /*  
       * let name = req.query.name
       * let age = req.query.name
       * let email = req / this.query.email 
    */

    // ? same as above code, but shortcut way
    let { name, age, email } = req.query
    /* 
    * req.query has 3 properties: name, age, and email
    * creating variable that has identifier as name, age , ane email
    *  which match the property of the object property  
    */
    console.log(name, age, email)

    res.status(201).json({
        message: "Created user",
        user: { name, age, email }
    })
})

/* 
request query:
http://127.0.0.1:4000/filter?name=DD&age=20&email=abc@hjdf.com
127.0.0.1:4000 : socket
.filter : endpoint
name=DD&age=20&email=abc@hjdf. : query param


*/


/* 
    ? Params
    * a dynamic route
    * parameters within an object
    * server-side, they will us to dynamically inject a value
    * business logic retrieves data based on param value
    * denoted by /:key (colon)
    * value is accessed using request.params
*/

// * anything after /:id is a variable
// * which means /anything
//  * example : https://github.com/mrpndev/fs11-mvc-controllers-routes
router.get("/:id", (req, res) => {
    console.log(req.params)
    // ? id becomes a variable in the world of endpoints
    console.log("This is your params objects", req.params)
    console.log("This is your params object value", req.params.id)

    // Object destructuring
    let { id } = req.params
    console.log(id)

    res.status(200).json({
        message: `Reached ${req.method} route`,
        id
    })
})


//request : http://127.0.0.1:4000/potato
//response: {
/* "message": "Reached GET route",
    "id": "potato"
} */

/*
  ! this URL will never be reached
  
*/
router.get("/:user", (req, res) => {
    // just a "/" endpoint
    // anything after : becomes a variable
    console.log("User endpoint reacher")
})

router.get("/users/:user", (req, res) => {
    // just a "/" endpoint
    // anything after : becomes a variable
    console.log(req.params)
    // url: http://127.0.0.1:4000/users/dor
    //output:  { user: 'dor' }
})

// ? A workaround by prepending a subroute (github)
router.get("/github/:username/:repo", (req, res) => {
    console.log(req.params)
})

// for example /mrpndev/fs11-mvc-controllers-routes/
// pretend that with url: http://127.0.0.1:4000/github/mrpndev/fs11-mvc-controllers-routes/
/* output: {
username: 'mrpndev',
    repo: 'fs11-mvc-controllers-routes'
} */

/*
? Challenge
* Economics of Countries API
* build an MVC + helpers express server
* install all dependencies
* create auth.js and routes.js files in the controllers
* ensure you have your .env configured
* tl;dr shell of a project
* build the following routes:
    * /register and /login (under auth)
    * under routes
        * GET /all countries
        * POST /new country
        * GET /:country to get one country
        * PUT /:id to update a country
        * DELETE /:id to delete a country
! test every route in postman
*/