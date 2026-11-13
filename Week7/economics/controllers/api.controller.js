const { Country } = require("../models/api.model");
const { Sequelize } = require("../db");
/* let db = [] */
let getAll = async (req, res) => {
    console.log(req.headers)
    let foundCountries = await Country.findAll();
    res.status(200).json({
        message: `${req.method} ${res.originalUrl} route`,
        foundCountries
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

let getByCountry = async (req, res) => {

    let { country } = req.params;
    console.log("this is the param", country)
    let foundCountry = await Country.findAll({
        where: Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col("country")),
            country.toLowerCase()
        ),
    });
    if (!foundCountry.length) {
        res.status(200).json({
            message: `${country} not found`
        })
    }
    res.status(200).json({
        message: `${req.method} ${req.originalUrl} route`, foundCountry

    })
}

let updateById = async (req, res) => {
    console.log(req.params, req.body)
    const { id } = req.params
    const foundCountry = await Country.findByPk(id);
    console.log(foundCountry)



    let updatedCountry = {
        // ?  Nullish coalescing operator */
        // * if it is null keep it as it is (Right hand side)
        //  * if it is not null , use the value in the req.body.country
        // * avoid have to update un wanted data
        country: req.body.country ?? country,
        countryCode: req.body.countryCode ?? countryCode,
        year: req.body.year ?? year,
        population: req.body.population ?? population,
        gdpUSD: req.body.gdpUSD ?? gdpUSD,
        inflation: req.body.inflation ?? inflation

    }
    /* foundCountry.update(req.body) */

    foundCountry.update(updatedCountry)
    if (!foundCountry) {
        res.status(200).json({
            message: `${country} not found`
        })
    }
    res.status(200).json({
        message: `${req.method} ${res.originalUrl} route , Country updated`,
        updatedCountry

    })
}

/* 
    ? Challenge
    * try to delete a countyr using its id
*/

let deleteById = async (req, res) => {


    /* 
    ? Paul's code
    const deleted = await Country.findByPk(id);
    console.log(deleted);
    await deleted.destroy();
    ! destroy is not really delete, is just disable the data
    ! so be careful when leaving message
    */


    const { id } = req.params
    const foundCountry = await Country.findByPk(id);
    const deleted = await Country.destroy({
        where: { id },
    });
    if (!deleted) {
        res.status(200).json({
            message: "No country found"
        })
        return
    }
    if (deleted === 0) {
        return res.status(404).json({ message: "Country not found" });
    }



    console.log(req.params)
    res.status(200).json({
        message: `${req.method} ${res.originalUrl} route, Country deleted  ${foundCountry.country}`

    })
}


module.exports = { getAll, createNew, getByCountry, updateById, deleteById }