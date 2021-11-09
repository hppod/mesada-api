require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || process.env.APP_PORT
const mysql_database = require('./src/databases/models')

app.use(cors())
app.use(express.text())
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.json({ type: 'application/json', limit: '50mb' }))

require('./src/routes/index')(app)

if (PORT) {
    app.listen(PORT, () => {
        console.log(`Express listening on ${PORT}`)
    })
} else {
    console.log('not found port config')
}

module.exports = { app }
