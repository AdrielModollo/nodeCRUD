const express = require('express') 
const bodyParser = require('body-parser')
const pdf = require('html-pdf')
const ejs = require('ejs');
const fs = require('fs');
const app = express()
const { response } = require('express');

const ObjectId = require('mongodb').ObjectID
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Adriel:5aGGcwrUAnhnFdQo@cluster0.7vary.mongodb.net/crudNode?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });
MongoClient.connect(uri, (err, client) => {
    if (err) return console.log(err)
        db = client.db('crudNode') // coloque o nome do seu DB

    app.listen(3000, () => {
        console.log('Server running on port 3000')
    })
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/', (req, res) => {
    var cursor = db.collection('data').find()
})

//exibe
app.get('/show', (req, res) => {
    db.collection('data').find().toArray((err, results) => {
        if (err) return console.log(err)
        res.render('show.ejs', { data: results })

    })
})

//adiciona
app.post('/show', (req, res) => {
    db.collection('data').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('Salvo no Banco de Dados')
        res.redirect('/show')
    })
})


//edita  
app.route('/edit/:id')
.get((req, res) => {
  var id = req.params.id

  db.collection('data').find(ObjectId(id)).toArray((err, result) => {
    if (err) return res.send(err)
    res.render('edit.ejs', { data: result })
  })
})
.post((req, res) => {
  var id = req.params.id
  var name = req.body.name
  var surname = req.body.surname

  db.collection('data').updateOne({_id: ObjectId(id)}, {
    $set: {
      name: name,
      surname: surname
    }
  }, (err, result) => {
    if (err) return res.send(err)
    res.redirect('/show')
    console.log('Atualizado no Banco de Dados')
  })
})

//deleta
app.route('/delete/:id')
.get((req, res) => {
  var id = req.params.id

  db.collection('data').deleteOne({_id: ObjectId(id)}, (err, result) => {
    if (err) return res.send(500, err)
    console.log('Deletado do Banco de Dados!')
    res.redirect('/show')
  })
})

//PDF
app.get('/generate-pdf', function(req, res){
  db.collection('data').find().toArray((err, results) => {
    if (err) return console.log(err)
    ejs.renderFile("./views/pdf.ejs",{data: results},(err, html) =>{
      /* verifica existência de erro ou sucesso */  
      if(err){
         console.log("Algo errado por aqui...");
     } else {
         pdf.create(html,{}).toFile("./meuPdfLindao.pdf",(err, res) => {
             /* verifica existência de erro ou sucesso */  
             if(err){
             } else {
                 console.log(res);
             }
         }) //Pega os dados recebido e gera o arquivo PDF no local definido
     }

    })
  })
  
})

        
