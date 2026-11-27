require("dotenv").config();

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: "",
        database: "economics",
        host: "127.0.0.1",
        dialect: "postgres",
    },
    test: {
        username: process.env.DB_USER,
        password: "",
        database: "database_test",
        host: "127.0.0.1",
        dialect: "postgres",
    },
    production: {
        username: process.env.DB_USER,
        password: "",
        database: "database_production",
        host: "127.0.0.1",
        dialect: "postgres",
    },
}