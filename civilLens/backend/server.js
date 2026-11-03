require("dotenv").config();
const express = require("express")
const app = express()
const cors = require("cors")
const routes = require("./src/routes");

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.listen(PORT, HOST, () => {
    console.log(`server is runing on ${HOST}:${PORT}`)
})

const corsOptions = {
    "origin": "http://127.0.0.1:4000/",
    // ? Only localhost with port 4000 is allow to access the api 
    // * origin: * anyone can get access to the API
    // * Can be viewed with header :access-control in


}
app.use(cors(corsOptions))
app.use(express.json())
app.use(routes)