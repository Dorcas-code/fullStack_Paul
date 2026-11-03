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

router.get("/issues/:id", (req, res) => {
    console.log(req.params)
    // ? id becomes a variable in the world of endpoints
    console.log("This is your params objects", req.params)
    console.log("This is your params object value", req.params.id)

    // Object destructuring
    let { id } = req.params
    id = Number(id)
    const issue = issues.find(i => i.id === id);
    console.log(id)
    if (!issue) {
        return res.status(404).json({ error: 'Issue not found' });
    }
    res.status(200).json({
        message: `Reached ${req.method} route , here is your issue`,
        issue
    })
})

module.exports = router