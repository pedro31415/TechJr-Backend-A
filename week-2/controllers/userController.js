const userModel = require('../models/userModels')
const jwt = require('jsonwebtoken')

const getAll =  async(_req,res) => {
    const user =  await userModel.getAll()
    return res.status(200).json(user);
}

const newRegister =  async(req,res) => {
    const createdAccount = await userModel.newRegister(req.body)
    return res.status(201).json(createdAccount)
}

const deleteAccount = async(req,res) => {
    const {id} = req.params
    await userModel.deleteAccount(id)
    return res.status(204).json();
}

const updateAccount = async(req,res) =>{
    const {id} = req.params
    await userModel.updateAccount(id, req.body)
    return res.status(204).json()
}

 const createToken = async(req,res) =>{
     const {id} = req.params
      const {email,password} = await userModel.createToken(id, req.body)
      console.log(req.body.email)
      console.log(req.body.password)
      console.log(email)
      console.log(password)
         const id2 = id 
         const token = jwt.sign({ id2 }, process.env.SECRET, {
           expiresIn: 300 
        });
        return res.json({ auth: true, token: token });
       
 }

module.exports = {
    getAll,
    newRegister,
    deleteAccount,
    updateAccount,
    createToken
}