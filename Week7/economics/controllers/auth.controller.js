// import your user model
const { User } = require("../models/model.auth")
const bcrypt = require("bcrypt")

// ? salt = random value added to our hash
const SALT = Number(process.env.SALT)

let registerUser = async (req, res) => {
    console.log(req.body)
    let { full_name, email, password } = req.body

    let newUser = await User.create({
        full_name: full_name,
        email: email,
        // ? this can enhance security and protect from hackers
        // ? Generate hash of the password
        password: bcrypt.hashSync(password, SALT)

    })

    console.log(newUser)

    res.status(201).json({
        message: `User Created ${req.method} ${req.originalUrl} route`, newUser
    })
    /*  let keys = Object.keys(req.body); */

    /*    try { */

    /*   
       // * deconstuct, then add validate logic
     //* codes before adding bcrypt
       // * call create on your User schema and pass the data
       let newUser = await User.create(req.body)
       console.log(newUser)
   
       res.status(201).json({
           message: `User Created ${req.method} ${req.originalUrl} route`
       }) */

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

    // ? compare database password (hash) with that of the user
    let verified = await bcrypt.compare(password, user.password)
    if (!verified) {
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

let resetPassword = async (req, res) => {
    const { email, password } = req.body

    let foundUser = await User.findOne({ where: { email } })

    if (!foundUser) {
        res.status(500).json({
            message: "User not found "
        })
    }

    foundUser.password = bcrypt.hashSync(password, SALT)

    // * take the password and hash it

    await foundUser.save()
    // * save the password to database

    res.status(200).json({ message: "Password Updated" })
}

module.exports = { registerUser, loginUser, resetPassword }


/* 
    ? Authentication vs Authorization
    * authentication
        * process of proving who you are
        * for example: checking your username and password
        * Have they registered?
        
    * authorization
        * process of proving you hace permissions to access a resource
        * they are registered, but may not in the role to access
*/

/* 
    ? Password Hashing
    * process of encrypting our password
    * a one way process
    * once hashed, it cannot be unhashed
    * common attck: rainbow table attack
    
    ? How Does it Work
    * we hash the password to obfuscate(make it confuse for hacker) the data
    * we then verify if the hash has been created by us
    * we will use library called bcrypt

*/