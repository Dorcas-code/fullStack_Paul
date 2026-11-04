const errorHandler = require("../middlewares/errorHandler")

const router = require("express").Router()

let db = []
router.post("/new", (req, res) => {
    /*     try { */
    console.log("response succuess", req.body)
    db.push(req.body)
    res.status(201).json({
        message: `${req.method} ${res.originalUrl} route`,
        db
    })
    /*     } catch (error) {
            errorHandler(res, error)
        } */
})

router.get("/all", (req, res) => {
    res.send("test response")
})

router.get("/:country", (req, res) => {

    res.status(200).json({
        message: `${req.method} ${res.originalUrl} route`,
        db
    })
})

router.put("/:id", (req, res) => {

    res.status(200).json({
        message: `${req.method} ${res.originalUrl} route`,
        db
    })
})

router.delete("/:id", (req, res) => {

    res.status(200).json({
        message: `${req.method} ${res.originalUrl} route`,
        db
    })
})


module.exports = router