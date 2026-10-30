
require("dotenv").config();
const express = require("express")
const app = express()

const PORT = process.env.PORT;
const HOST = process.env.HOST;
const authRoutes = require("./controllers/auth");
const routes = require("./controllers/routes");


app.listen(PORT, HOST, () => {
    console.log(`server is runing on ${HOST}:${PORT}`)
})

app.use(express.json())
app.use(authRoutes)
app.use(routes);