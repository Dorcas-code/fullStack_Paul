const router = require("express").Router()
const errorHandler = require("../helpers/errorHandler")

router.post("/register", (req, res) => {

    try {
        console.log(req.body)
        // * deconstuct, then add validate logic
        let { username, password, email } = req.body

        // ? Validation
        if (!username || !password || !email) {


            // * res.status is sending status 400 
            return res.status(400).json({
                message: "Username, password required"
            })
            // * early return so not send two response at once (400 and 201)
        }

        // ? validate email format with regex
        const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Valid email required"
            })
        }

        if (password.length <= 8) {
            return res.status(400).json({
                message: "Valid passwird required must be 8 or more characters "
            })
        }
        res.status(201).json({
            message: `${req.method} ${req.originalUrl} route`
        })

    } catch (error) {
        errorHandler(res, error)
        // * much cleaner use helper functions
    }
})

/* 
! if response has X-powered-By: express, there is security risk that hacker know which server you are using  */

router.post("/login", (req, res) => {

    try {
        console.log(req.body)
        res.status(200).json({
            message: `${req.method} ${req.originalUrl} route`
        })

    } catch (error) {
        errorHandler(res, error)
    }
})


module.exports = router