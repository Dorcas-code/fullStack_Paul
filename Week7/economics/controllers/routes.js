const errorHandler = require("../helpers/errorHandler")

const router = require("express").Router()

let db = []
router.post("/new", (req, res) => {
    try {
        console.log("response succuess", req.body)
        db.push(req.body)
        res.status(201).json({
            message: `${req.method} ${res.originalUrl} route`,
            db
        })
    } catch (error) {
        errorHandler(res, error)
    }
})

module.exports = router