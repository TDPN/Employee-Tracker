// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "LK41m&kxVA6c8Mt@",
    database: "employee_db"
});

// Make connection.
connection.connect();
module.exports = connection;