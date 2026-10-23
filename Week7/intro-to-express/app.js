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

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// A server need to listen to http request that is coming in
// IP address is the address of the computer
// PORT is door for message to come in
