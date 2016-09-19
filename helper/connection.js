var mysql = require('mysql');
var config = require('../config/config');

var connection = mysql.createConnection({
  host: config.development.host,
  user: config.development.username,
  password: config.development.password,
  database: config.development.database,
  multipleStatements: true
});

module.exports = connection;
