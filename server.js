const express = require('express') 
const bodyParser = require('body-parser')
const app = express()


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Adriel:5aGGcwrUAnhnFdQo@cluster0.7vary.mongodb.net/crudNode?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({ extended: true}))

const client = new MongoClient(uri, { useNewUrlParser: true });
MongoClient.connect(uri, (err, client) => {
    if (err) return console.log(err)
    db = client.db('crudNode') // coloque o nome do seu DB
  
    app.listen(3000, () => {
      console.log('Server running on port 3000')
    })
  })



app.set('view engine', 'ejs') //chama nossa biblioteca ejs

app.get('/', (req, res) => {
    res.render('index.ejs')
}) //faz leitura de nosso dados

app.post('/show', (req, res) => {
    db.collection('data').save(req.body, (err, result) => {
        if (err) return console.log(err)

    console.log('salvo no banco de dados')
    res.redirect('/')
    db.collection('data').find().toArray((err, results) => {
        console.log(results)
        })

    })
})