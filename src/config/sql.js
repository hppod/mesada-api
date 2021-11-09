const { MYSQL } = require('./env')

module.exports = {
    username: MYSQL.User,
    password: MYSQL.Pass,
    database: MYSQL.DB,
    host: MYSQL.Host,
    port: MYSQL.Port,
    dialect: MYSQL.Dialect,
    logging: MYSQL.Logging === 'true'
}