const express = require('express')
const routes = express.Router()
const userController = require('../controllers/userController')
const userMiddlewares = require('../middlewares/userMiddlewares')
const userModels = require('../models/userModels')

routes.post('/user/register', userModels.validateEmail, userMiddlewares.validateBody,userController.newRegister)

routes.post('/user/login')

routes.delete('/user/:id', userController.deleteAccount)

routes.get('/user', userController.getAll)

routes.post('/user/forgot')

routes.post('/user/reset')

routes.put('/user/:id', userMiddlewares.validateBody,userController.updateAccount)

routes.post('/product')

routes.delete('/product/:name')

routes.get('/product')

routes.get('/product/one/:name')

routes.get('/product/list')


module.exports = routes