/* 
    ? Router
    * an object handling routing and middleware only
    * helps with scope pollution (access to all methods when not needed )


    ? Basic Routing
    * router.method() handles reconnet type (geT, POST, PATCH, PUT, DELETE,etc.)
    * endpoint
    * callback with business lofic and req/res s parameter
    * response is aer
    */

//import express and invoke its router interfacce
const router =  require("express").Router()

router.get("/health", (req, res) =>{
    res.status(200).json({
        message: "ther server is up and running"
    })
})

//exprts all modified content of the object to access elsewhere
module.exports = router
// * For this to work need to import it to app.js