
require("dotenv").config();
const express = require("express")
const app = express()
const cors = require("cors")


const PORT = process.env.PORT;
const HOST = process.env.HOST;
const authRoutes = require("./controllers/auth");
const routes = require("./controllers/routes");
const errorHandler = require("./helpers/errorHandler")
const headers = require("./middlewares/headers")
const rateLimiter = require("./middlewares/ratelimiter")
app.listen(PORT, HOST, () => {
    console.log(`server is runing on ${HOST}:${PORT}`)
})

/* 
    ? Middleware Chaining
    * process of taking our helpers, validators, etc
    * we apply them to the middleware lifecycle
    * we put the before in the middle or after routes
    * NO NEED IMPORT EXPORT ANYMORE
*/

const corsOptions = {
    "origin": "http://127.0.0.1:4000/",
    // ? Only localhost with port 4000 is allow to access the api 
    // * origin: * anyone can get access to the API
    // * Can be viewed with header :access-control in
    "methods": "POST"
    // ? ONly accept POST request
}

// ? 1. jsonify the body 2. go to authRoutes 3. go to routes 
app.use(rateLimiter)
app.use(express.json())
/* app.use(cors(corsOptions)) */
// we add the cors on top of all other middleware
app.use(headers)
app.use(authRoutes)
app.use(routes)
app.use(errorHandler)

/* 
  ? CORS
  * Cross Origin Resources Sharing
  * Security System for permission between client and server
  * works by modifying the headers for request and response
  * CORS is not access contol!! this would require its own mechanism
  * CORS is anforced by web browsers only, not by express server
  * authenication & authorization is not CORS
  ! Prevent other domain or port to steal info from your api (But only error on console)
  */