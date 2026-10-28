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


app.listen(PORT, HOST, ()=>{
    console.log(`server is runing on ${HOST}:${PORT}`)
})
console.log(routes)
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