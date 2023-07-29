const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
const routes = require('./config/routes')
app.use(routes)


app.listen(3000, () => {
    console.log(`Express started at  http://localhost:3000`)
})