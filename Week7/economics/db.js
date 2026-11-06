/*
    ? Object Relational Mapper (ORM)
    * tool which allows communication with the database
    * it allows db communication using native programming language instead of SQL
    * allows full CRUD operations on the database
    * holds all transactions up to ACID (Atomicity, consistency, isolation, durability)standards
*/

/*
    ? Database Setup Notes
    * install sequelize using npm i sequelize pg pg-hstore
    * add db path to our .env file
    * example: "postgres//user.password@ip:port/nameofdb"
    * example: "postgres//paul.pwd123@localhost:5432/mydb"
    * db.js will store connection instance
    * create an instance of the database uding pgAdmin or psgl
    * import contents of the file into app.js
    * follow along with comments in app.js to 
*/

//import and destructure Sequelize class from the import
const { Sequelize, DataTypes } = require("sequelize")

// instantiate sqequalize and provide it with  location and credentials
const db = new Sequelize(process.env.DB_URL, {
    logging: true
})

//export for use in other areas of the project
module.exports = { db, Sequelize, DataTypes }