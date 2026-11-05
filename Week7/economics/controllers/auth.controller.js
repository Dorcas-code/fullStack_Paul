let registerUser = (req, res) => {
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