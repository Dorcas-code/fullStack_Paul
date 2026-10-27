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
    * can be done using exoress static middleware
    */

//Determine a path to  our static vcontent]
console.log(`${__dirname}`)
// __dirname
//show the full path of the project we are working on

app.listen(PORT , HOST, () => {
    console.log(`server is runing on ${HOST}:${PORT}`)
})
// A server need to listen to http request that is coming in
// IP address is the address of the computer
// PORT is door for message to come in

let public = `${__dirname}/public`

app.use("/", express.static(public))
//.use()
// need a path and a callback
// to handle logic for a specific path
// . static serve the entire file, in this case /public
// can access all things inside /public folder

app.get("/image", (req,res)=> {
    res.sendFile(`${public}/alisa-wong-Z0mwx0RgyKQ-unsplash.jpg`)
})


// .sendFile () can just reach  a certain file

app.get("/" , (req, res)=> {
  res.send("<p>Hello world</p>");
    res.status(200).send("the server is running") ;
})

//.get() 
// is a method that handle a get request for us
// this does not show as app.use() is run, and this is not reached 

/* 
	? Challenge
	* the / route has a form
	* make the form send a request to /success endpoint
	* the /success endpoint should render the following:
	* "Thank you for your email, we will respond in one business day"
	* The text above should be a a page, just some HTML text
	! EXTRA SPICEY
	* what if I wanted the page to say "Thank you {email}... where the email gets filled from the earlier form?"
*/
// method 1
app.get("/success", (req,res)=> {

      res.sendFile(`${public}/success.html`)
        //console.log(req.query)
        //output: 
        /*[Object: null prototype] {
  email: 'Zxzx@123',
  subject: 'e2e2',
  content: '2e2'
}*/
})
// method 2
app.get("/success", (req,res)=> {
        let email = req.query;
     res.send(`<p>Thank you for your ${email}, we will respond in one business day</p>`);
 
     // for getting payload object
})