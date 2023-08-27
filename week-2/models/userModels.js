const { validateEmail1 } = require('../middlewares/userMiddlewares')
const connection = require('./connection')

const getAll =  async() => {
    const [user]  = await connection.execute('SELECT * FROM login')
    return user
}

const newRegister =  async(user) => {
    const {name, email, password} = user;
    const query = 'INSERT INTO login(name, email, password) VALUES (?, ?, ?)'
    const [createdAccount] = await connection.execute(query, [name, email, password])
    if (createdAccount.affectedRows === 1) { 
        return { name, email } 
    }else { 
        throw new Error("Falha ao criar a conta") 
    }  
}

const deleteAccount = async(id) =>{
    const query = 'DELETE FROM login WHERE id = ?'
    const removedAccount = await connection.execute(query, [id])
    return removedAccount
}

const updateAccount = async(id,user) =>{
    const query = 'UPDATE login SET name = ?, email = ?, password = ? WHERE id = ?'
    const {name,email,password} = user
    const updateAccount = await connection.execute(query, [name,email,password,id])
    return updateAccount
}


const validateEmail =  async (req, res) => {
    const { body } = req
    const validate = validateEmail1(body.email) 
        if(!validate){
            return res.status(401).json({message: "This email is invaled"})
        } else {
            console.log("Fuction Erro")
        }
    const checkEmailQuery = 'SELECT * FROM login WHERE email = ?'
    const [existingUsers] = await connection.execute(checkEmailQuery, [body.email])

    const message = {}

    if (existingUsers.length > 0) {
        message.email = "This email already exists"
        return res.status(409).json(message)
    }
}

module.exports = {
    getAll,
    newRegister,
    deleteAccount,
    updateAccount,
    validateEmail
}