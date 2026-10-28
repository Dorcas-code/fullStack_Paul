

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
function timestamp(req, res, next) {
    res.date = new Date().toLocaleTimeString()
    console.log(res.date)
    //next() - allow us to continue down the call stack
    next()
}

//exprts all modified content of the object to access elsewhere
module.exports = timestamp
// * For this to work need to import it to app.js