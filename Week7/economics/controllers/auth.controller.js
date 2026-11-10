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

let loginUser = async (req, res) => {
    /*    try { */
    /*  let keys = Object.keys(req.body); */

    // console.log(req.body)
    const { email, password } = req.body;
    // * FindONe accepts query object where we match email from db to email from req
    //  let foundUser = await User.findOne({ where: { email: req.body.email } })
    let foundUser = await User.findOne({ where: { email } })
    console.log(" here is Found user", foundUser)

    if (!foundUser) {
        res.status(403).json({
            message: "invalid user or passwird"
        })

        return
    }

    // example of object destructuring and giving it an alias

    //? Rename foundUser.dataValues into user
    // * dataValues is for getting data from database
    let { dataValues: user } = foundUser

    console.log("password is ", user.password)
    if (user.password !== password) {
        res.status(403).json({
            message: "invalid user or password"
        })
        return
    }
    res.status(200).json({
        message: `${foundUser.dataValues.email} logged in`
    })

    /* } catch (error) {
        errorHandler(res, error)
    } */
}

module.exports = { registerUser, loginUser }