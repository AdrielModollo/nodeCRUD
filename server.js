const express = require('express') 
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function() {
    console.log('server rodando na porta 3000')
}) //indica que nosso servidor está rodando na porta 3000

app.set('view engine', 'ejs') //chama nossa biblioteca ejs

app.get('/', (req, res) => {
    res.render('index.ejs')
}) //faz leitura de nosso dados

app.post('/show', (req, res) => {
    console.log('Opa, tudo certo!')
})