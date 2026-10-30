const router = require("express").Router()
const errorHandler = require("../helpers/errorHandler")

router.post("/register", (req, res) => {

    try {
        console.log(req.body)
        res.status(201).json({
            message: `${req.method} ${req.originalUrl} route`
        })

    } catch (error) {
        errorHandler(res, error)
        // * much cleaner use helper functions
    }
})

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