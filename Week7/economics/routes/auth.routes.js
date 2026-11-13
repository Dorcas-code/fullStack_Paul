const router = require("express").Router()
const { registerUser, loginUser, resetPassword } = require("../controllers/auth.controller")
const errorHandler = require("../middlewares/errorHandler")
const authValidator = require("../validators/registrationValidatior")
router.post("/register", authValidator, registerUser)

/* 
! if response has X-powered-By: express, there is security risk that hacker know which server you are using  */

router.post("/login", loginUser)

router.put("/resetpassword", resetPassword)
module.exports = router