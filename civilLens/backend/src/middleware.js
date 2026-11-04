function validateIssue(req, res, next) {

    if (req.url === "/issues") {
        let { title, description } = req.body

        // ? Validation
        if (!title || !description) {


            // * res.status is sending status 400 
            return res.status(400).json({
                message: "Tittle , description required"
            })
            // * early return so not send two response at once (400 and 201)
        }




    }

    next()
}

module.exports = validateIssue