const router = require("express").Router()


let issues = []

router.get("/issues", (req, res) => {
    /*     console.log(req); */
    res.status(200).json({
        message: `${req.method} ${res.originalUrl} route`,
        issues
    })
})

router.post("/issues", (req, res) => {
    /*     try { */
    console.log("response succuess", req.body)
    issues.push(req.body)
    res.status(201).json({
        message: `${req.method} ${res.originalUrl} route`,
        issues
    })
    /*     } catch (error) {
            errorHandler(res, error)
        } */
})
module.exports = router