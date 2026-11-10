const { db, DataTypes } = require("../db")

/* 
    ? Schema
    * a well defined structure of our data
    * allow us to outline
        * columns
        * constraints
        * requirements
        * additional built-in functionality
*/

const Country = db.define(
    "Country",
    {

        country: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        countryCode: {
            type: DataTypes.CHAR(2),
            allowNull: false,
            field: "country_code",
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        population: DataTypes.BIGINT,
        gdpUSD: {
            type: DataTypes.BIGINT,
            field: "gdp_usd",
        },
        inflation: DataTypes.DECIMAL(5, 2),
        unemployment: DataTypes.DECIMAL(5, 2),
    },
    {
        /*      tableName: "countries", */
        timestamps: true,
    }
);

module.exports = { Country };