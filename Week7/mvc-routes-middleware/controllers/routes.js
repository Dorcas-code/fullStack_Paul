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
