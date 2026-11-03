
require("dotenv").config();
const express = require("express")
const app = express()
const cors = require("cors")


const PORT = process.env.PORT;
const HOST = process.env.HOST;
const authRoutes = require("./controllers/auth");
const routes = require("./controllers/routes");
const errorHandler = require("./helpers/errorHandler")

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
    origin: "localhost:5100"
}

// ? 1. jsonify the body 2. go to authRoutes 3. go to routes 
app.use(express.json())
app.use(cors(corsOptions))
// we add the cors on top of all other middleware

app.use(authRoutes)
app.use(routes)
app.use(errorHandler)

/* 
  ? CORS
  * Cross Origin Resources Sharing
  * Security System for permission between client and server
  * works by modifying the headers for request and response
*/