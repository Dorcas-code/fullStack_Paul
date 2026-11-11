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

const Issues = db.define(
    "Issues",
    {

        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,


        },
        category: {
            type: DataTypes.STRING(100),


        },
        status: {
            type: DataTypes.STRING(50),
            defaultValue: "open",

        },
        votes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },

    },
    {
        tableName: "issues",
        timestamps: false,
    }
);

module.exports = { Issues };