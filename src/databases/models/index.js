const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../../config/sql')

const db = {}
const sequelize = new Sequelize(config)

sequelize.authenticate()
  .then(() => console.log('MySQL connected'))
  .catch(err => console.log(`Error on connect MySQL => ${err}`))

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db