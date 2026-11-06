// import your user model
const { User } = require("../models/model.auth")

let registerUser = async (req, res) => {
    /*  let keys = Object.keys(req.body); */

    /*    try { */
    console.log(req.body)
    // * deconstuct, then add validate logic

    // call create on your User schema and pass the data
    let newUser = await User.create(req.body)
    console.log(newUser)

    res.status(201).json({
        message: `User Created ${req.method} ${req.originalUrl} route`
    })

    /*   } catch (error) {
          errorHandler(res, error)
          // * much cleaner use helper functions
      } */
}

let loginUser = (req, res) => {
    /*    try { */
    /*  let keys = Object.keys(req.body); */

    /*     console.log(req.body) */


    res.status(200).json({
        message: `${req.method} ${req.originalUrl} route`
    })

    /* } catch (error) {
        errorHandler(res, error)
    } */
}

module.exports = { registerUser, loginUser }