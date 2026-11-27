/* 
    ? Protected Routes
    * routes requiring authorization or authentication to access
    * done using session or token
    * we will use JSONWebToken to accomplish this

*/
const jwt = require("jsonwebtoken")
const JWT_KEY = process.env.JWT_KEY
const { User } = require("../models/model.auth")

let validateSession = (req, res, next) => {
    // ? preflight request - checks what's allowed by the server
    if (req.method === "Options") {
        next()
    }

    // ? check if token exists
    // ? token passed in headers, may have Bearer prefix
    // ? Bearer prefix: 
    if (!req.headers.authorization) {
        return res.status(403).json({
            message: "Forbidden"
        })
    }

    // ? handle the auth header as Bearer or naked tokken
    let authToken = req.headers.authorization.includes("Bearer")
        ? req.headers.authorization.split(" ")[1]
        : req.headers.authorization



    // ? jwt verifies if token generated using our key

    const payload = jwt.verify(authToken, JWT_KEY, async (err, payload) => {
        if (err) {
            console.log(err)
            res.status(403).json({

                message: "Forbidden"
            })
        } else {
            console.log(payload, JWT_KEY)
        }
        // ? Safer than trusting the request
        // ? Comes from database and can be validated      


        let user = await User.findByPk(payload.id)

        req.user = user
        console.log(req.user)


        /*  
        ? original : req.user = payload
        */

        next()

    });






}


module.exports = validateSession