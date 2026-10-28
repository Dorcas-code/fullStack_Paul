require("dotenv").config();
const express = require("express")
const app = express()

/* 
    ? .env and dotenc
    * .env is a hidden file keeping track of all your secrets
    * loaded at runtime
    * secrets are not hardcoded within your application
    * install https://www.npmjs.com/package/dotenv from npm to store secret
    * to use:
        * install with npm i dotenv
        * add require("dotenv").config() to top of app.js
        * use process.env to access
*/
const PORT = process.env.PORT
const HOST = process.env.HOST

// import our exports
const routes = require("./controllers/routes");
const timestamps = require("./helpers/timestamp");

/* 
    ? Middleware
    * a function that can do anything
    * has access to request
    * has access to response
    * has access to the next function in the call stack
    * if we don't next(), we'restopped
    * Request → Middleware(s) → Controller → Response (through middleware) → Client
*/

// ? Better Middleware Example (Not built in)
/* function timestamp(req, res, next) {
    res.date = new Date().toLocaleTimeString()
    console.log(res.date)
    //next() - allow us to continue down the call stack
    next()
} */

app.use(timestamps)
/* console.log(timestamp()) */
// how to make it everytime somebody hit a route

// * .use() is a middleware
// * .use() calls what is in the routes 
// * .use() handler for the middleware
app.use(routes);

app.listen(PORT, HOST, () => {
    console.log(`server is runing on ${HOST}:${PORT}`)
})
/* console.log(routes) */
/* 
    ? Model View Controller Arhitecture (MVC)
    * a way to architect your application
    * handle full-stack aopps
    * breaks full stack application into three categiries
        * model (data)
        * view (client, browser, curl, Postman)
        * controller (business logic, routes)
    * MVC is used for Seperation of concerns
    
    ? Seperation of Concerns
    * enables maintainability
    * helps group and find find specific modules, services, etc.
    * requires the use of design patterns
*/


/* console.log(process.env) */