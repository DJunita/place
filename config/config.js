require('dotenv').config();

var config = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASS,
        "port": process.env.DB_PORT,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": "mysql"
    }
}

module.exports = config;
