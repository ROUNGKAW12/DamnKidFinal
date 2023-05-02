const mysql = require("mysql2");
const dbConnection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "DamnKid_login"
}).promise()

module.exports = dbConnection;