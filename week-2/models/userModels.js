const connection = require('./connection')

const getAll =  async() => {
    const [user]  = await connection.execute('SELECT * FROM login')
    return user
}

module.exports = {
    getAll
}