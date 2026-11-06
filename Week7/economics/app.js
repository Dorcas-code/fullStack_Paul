
require("dotenv").config();
const express = require("express")
const app = express()
const cors = require("cors")


const PORT = process.env.PORT;
const HOST = process.env.HOST;
/* const authRoutes = require("./controllers/auth.controller"); */
const authRoutes = require("./routes/auth.routes");
const apiRoutes = require("./routes/api.routes");
const errorHandler = require("./middlewares/errorHandler")
const headers = require("./middlewares/headers")
const rateLimiter = require("./middlewares/ratelimiter")
const { db } = require("./db")

app.listen(PORT, HOST, async () => {

    try {
        //estaclish connectionto existing database
        await db.authenticate()

        //syncs all of our schemas (structure) to the database
        await db.sync({ force: false })
        console.log(`server is runing on ${HOST}:${PORT}`)
        console.log(`[databse] is runing `)
    } catch (err) {
        console.log("error:", err)
        // ! if this console.log is commented
        // we cannot see error at all , like it is running fine 
    }
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
    /*   "methods": "POST" */
    // ? ONly accept POST request
}

// ? 1. jsonify the body 2. go to authRoutes 3. go to routes 
/* app.use(rateLimiter) */
app.use(express.json())
/* app.use(cors(corsOptions)) */
// we add the cors on top of all other middleware
app.use(headers)


app.use(authRoutes)
app.use(apiRoutes)
app.use((req, res) => {
    res.status(404).sendFile(`${__dirname}/public/index.html`)
})
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