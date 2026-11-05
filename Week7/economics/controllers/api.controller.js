
let db = []
let getAll = (req, res) => {

    res.status(200).json({
        message: `${req.method} ${res.originalUrl} route`,
        db
    })
}

let createNew = (req, res) => {
    /*     try { */
    console.log("response succuess", req.body)
    db.push(req.body)
    res.status(201).json({
        message: `${req.method} ${res.originalUrl} route`,
        db
    })
    /*     } catch (error) {
            errorHandler(res, error)
        } */
}

let getByCountry = (req, res) => {
    console.log(req.params)
    res.status(200).json({
        message: `${req.method} ${res.originalUrl} route`,
        db
    })
}

let updateById = (req, res) => {
    console.log(req.params)
    res.status(200).json({
        message: `${req.method} ${res.originalUrl} route`,
        db
    })
}

let deleteById = (req, res) => {
    console.log(req.params)
    res.status(200).json({
        message: `${req.method} ${res.originalUrl} route`,
        db
    })
}


module.exports = { getAll, createNew, getByCountry, updateById, deleteById }