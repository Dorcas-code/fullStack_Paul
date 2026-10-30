function errorHandler(res, error) {
    console.error(error)
    console.log(res)
    res.status(500).json({
        message: error
    })
}
module.exports = errorHandler