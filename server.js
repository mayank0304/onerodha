const express = require('express')
const sqlite3 = require('sqlite3')

const db = new sqlite3.Database('onerodha.db')

app = express()

app.use(express.static('static'))

app.set('view engine', 'pug')
app.get('/', (req,res) => {
  res.render('index')
})
app.get('/login', (req,res) => {
  res.render('login')
})

app.listen(5000)
