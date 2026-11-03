const router = require("express").Router()
const errorHandler = require("../helpers/errorHandler")
const authValidator = require("../validators/registrationValidatior")
router.post("/register", authValidator, (req, res) => {
    /*  let keys = Object.keys(req.body); */

    /*    try { */
    console.log(req.body)
    // * deconstuct, then add validate logic

    res.status(201).json({
        message: `${req.method} ${req.originalUrl} route`
    })

    /*   } catch (error) {
          errorHandler(res, error)
          // * much cleaner use helper functions
      } */
})

/* 
! if response has X-powered-By: express, there is security risk that hacker know which server you are using  */

router.post("/login", (req, res) => {

    /*    try { */
    /*  let keys = Object.keys(req.body); */
    console.log(keys)
    /*     console.log(req.body) */


    res.status(200).json({
        message: `${req.method} ${req.originalUrl} route`
    })

    /* } catch (error) {
        errorHandler(res, error)
    } */
})


module.exports = router