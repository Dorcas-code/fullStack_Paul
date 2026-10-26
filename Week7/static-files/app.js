const express = require("express");
/* require is a funciton used when you want to import sth. into your file */
/* Analogy: Taking the bricks to build your home, transfer it to your site! */

const app = express();
// invoke express function so we can use its built in methods

const PORT = 4000;
const HOST = "127.0.01";
// IP + PORT = SOCKET

/* 
    ? Server side Rendering (SSR)
    * a server is responsible for serving static content
*/

app.listen(PORT , HOST, () => {
    console.log(`server is runing on ${HOST}:${PORT}`)
})
// A server need to listen to http request that is coming in
// IP address is the address of the computer
// PORT is door for message to come in

app.get("/" , (req, res)=> {
  res.send("<p>Hello world</p>");
    res.status(200).send("the server is running") ;
})

//.get() is a method that handle a get request for us