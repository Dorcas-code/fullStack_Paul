const { Country } = require("../models/api.model");
/* let db = [] */
let getAll = (req, res) => {

    res.status(200).json({
        message: `${req.method} ${res.originalUrl} route`,
        db
    })
}

let createNew = async (req, res) => {
    /*     try { */
    console.log("response succuess", req.body)
    let add_countryData = await Country.create({
        country: req.body.country,
        countryCode: req.body.countryCode,
        year: req.body.year,
        population: req.body.population,
        gdpUSD: req.body.gdpUSD,
        inflation: req.body.inflation,
        unemployment: req.body.unemployment,
    })
    console.log(add_countryData)
    res.status(201).json({
        message: `Country economics data created : ${req.method}  route`,
        add_countryData

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