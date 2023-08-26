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


module.exports = {
    getAll,
    newRegister
}