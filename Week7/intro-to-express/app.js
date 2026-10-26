const express = require("express");
/* require is a funciton used when you want to import sth. into your file */
/* Analogy: Taking what we brought in the materials to build your home, transfer it to your site! */

const app = express();
// invoke express function so we can use its builtin methods

const PORT = 4000;
const HOST = "127.0.01";
// IP + PORT = SOCKET

app.listen(PORT , HOST, () => {
    console.log(`server is runing on ${HOST}:${PORT}`)
})
// A server need to listen to http request that is coming in
// IP address is the address of the computer
// PORT is door for message to come in

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/health', (req, res) => {
  res.status(200).send('Server is up and running!')
})
// HTTP methods allow us to define what we're doing with the data when we hit that route. 
//.get() is a method that handle a get request for us
//. create a route that we can listen on
// call back function to send response 
// HTTP verbs remembering https://http.cat/
// HTTP requests what we do with theat 