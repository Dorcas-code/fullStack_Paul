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

router.get("/health", (req, res) => {
    // console.log(res);
    res.status(200).json({
        message: "ther server is up and running"
    })
})

//exprts all modified content of the object to access elsewhere
module.exports = router
// * For this to work need to import it to app.js