let customheaders = (req, res, next) => {
    res.setHeader("X-Powered-By", ".NET")
    res.setHeader("Acess-Control-Allow-Origin", "heep://localhost:3000")

    next()
}

module.exports = customheaders