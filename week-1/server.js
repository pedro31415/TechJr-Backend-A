const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url == '/'){
        res.end('<h1>Mensagem</h1>')
    } else if(req.url == '/contato'){
        res.end('<h1>contato</h1>')
    } else {
        res.end('<h1>Sem resposta para essa url</h1>')
    }
})

server.listen(3001, 'localhost', () =>{
    console.log('Servidor de pé em hettp://localhost:3001')
    console.log('Para desligar o nosso servidor: ctrl + c')
})