const router = require("express").Router()
const { registerUser, loginUser, resetPassword } = require("./auth_controllers")
const validateIssue = require("./middleware")

/* let issues = [] */



router.post("/register", registerUser)


router.post("/login", loginUser)

module.exports = router