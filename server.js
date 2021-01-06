const express = require('express') 
const app = express()

app.listen(3000, function() {
    console.log('server rodando na porta 3000')
}) //indica que nosso servidor está rodando na porta 3000

app.set('view engine', 'ejs') //chama nossa biblioteca ejs

app.get('/', (req, res) => {
    res.render('index.ejs')
}) //faz leitura de nosso dados
