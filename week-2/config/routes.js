const express = require('express')
const routes = express.Router()
const userController = require('../controllers/userController')

routes.post('/user/register')

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


routes.get('/hello', (req,res) => {
    return res.send('hello wolrd') 
})

routes.post('/add', (req,res) => {
    const body = req.body
    if(!body) 
        return res.status(400).end()
    
    db.push(body)
    return res.json(body)
})

routes.delete('/:id', (req,res) => {
    const id = req.params.id

    let newDb = db.filter(item => {
        if(!item[id]){
            return item
        }
    })

    db = newDb
    return res.send(newDb)
})


module.exports = routes