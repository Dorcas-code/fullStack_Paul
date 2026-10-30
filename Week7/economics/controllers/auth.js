const router = require("express").Router()
const errorHandler = require("../helpers/errorHandler")

router.get("/register", (req, res) => {

    try {

    } catch (error) {
        errorHandler(error)
        // * much cleaner use helper functions
    }
})

router.get("/login", (req, res) => {

    try {

    } catch (error) {
        errorHandler(error)
    }
})


module.exports = router