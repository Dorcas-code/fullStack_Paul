function validateRegistraion(req, res, next) {
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
    if (!emailRegex.test(email.trim())) {
        return res.status(400).json({
            message: "Valid email required"
        })
    }

    if (password.length <= 8) {
        return res.status(400).json({
            message: "Valid passwird required must be 8 or more characters "
        })
    }
}

module.exports = validateRegistraion