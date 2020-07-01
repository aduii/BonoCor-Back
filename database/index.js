var mysql = require('mysql');
require('dotenv').config();

connection = mysql.createPoolCluster();
connection.add("MASTER", {
    host: "dbfinanzas.ccqmzlyj15td.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password: "admin123",
    database: "bonocorp"
});

module.exports ={
    db: connection.of('MASTER'),
};