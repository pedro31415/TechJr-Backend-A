const userModel = require('../models/userModels')

const getAll =  async(_req,res) => {
    const user =  await userModel.getAll()
    return res.status(200).json(user);
}

const newRegister =  async(req,res) => {
    const createdAccount = await userModel.newRegister(req.body)
    return res.status(201).json(createdAccount)
}

module.exports = {
    getAll,
    newRegister
}