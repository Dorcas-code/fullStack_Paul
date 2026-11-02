const router = require("express").Router()
const errorHandler = require("../helpers/errorHandler")
const registrationValidator = require("../validators/validateRegistration")
router.post("/register", (req, res) => {

    try {
        console.log(req.body)
        // * deconstuct, then add validate logic
        registrationValidator(req, res)
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