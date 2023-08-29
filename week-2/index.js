const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
require("dotenv-safe").config()
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())
dotenv.config()

const PORT = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
const routes = require('./config/routes')
app.use(routes)


app.listen(PORT, () => {
    console.log(`Express started at  http://localhost:3000`)
})