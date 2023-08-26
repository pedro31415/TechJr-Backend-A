const userModel = require('../models/userModels')

const getAll =  async(req,res) => {
    const user =  await userModel.getAll()
    return res.status(200).json(user);
}

module.exports = {
    getAll
}