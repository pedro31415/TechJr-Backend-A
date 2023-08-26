const express = require('express')
const routes = express.Router()
const userController = require('../controllers/userController')
const userMiddlewares = require('../middlewares/userMiddlewares')
const { newRegister } = require('../models/userModels')

routes.post('/user/register', userMiddlewares.validateBody, userController.newRegister)

routes.post('/user/login')

routes.delete('/user')

routes.get('/user')

routes.post('/user/forgot')

routes.post('/user/reset')

routes.patch('/user')

routes.post('/product')

routes.delete('/product/:name')

routes.get('/product')

routes.get('/product/one/:name')

routes.get('/product/list')


routes.get('/user', userController.getAll)

routes.get('/', (req,res) =>{
    return res.json(db)
})


module.exports = routes