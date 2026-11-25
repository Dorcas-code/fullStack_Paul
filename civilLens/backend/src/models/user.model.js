const { db, DataTypes } = require("../../db")

/* 
    ? Schema
    * a well defined structure of our data
    * allow us to outline
        * columns
        * constraints
        * requirements
        * additional built-in functionality
*/

const User = db.define("user", {

    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            is: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 10
        }
    }
},


    {
        timestamps: false
    })

module.exports = { User }