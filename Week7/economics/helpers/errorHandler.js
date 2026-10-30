function errorHandler(error) {
    console.error(error)
    res.status(500).json({
        message: "INternal error Ocurred"
    })
}
module.exports = errorHandler