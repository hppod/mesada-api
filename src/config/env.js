require('dotenv').config()

const MYSQL = {
    Host: process.env.MYSQL_HOST,
    DB: process.env.MYSQL_DB,
    User: process.env.MYSQL_USER,
    Pass: process.env.MYSQL_PASS,
    Port: process.env.MYSQL_PORT,
    Dialect: process.env.MYSQL_DIALECT,
    Logging: process.env.MYSQL_LOGGING
}

module.exports = {
    MYSQL
}