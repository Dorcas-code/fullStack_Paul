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

const User = db.define("user", {
    full_name: {
        type: DataTypes.STRING(100),
        allowNull: false

    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            is: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 10
            }
        }
    },


}, {
    timestamps: true
})

module.exports = { User }