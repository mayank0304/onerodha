const express = require('express')
const session = require('express-session')
const sqlite3 = require('sqlite3')

const db = new sqlite3.Database('onerodha.db')

app = express()

app.use(express.static('static'))
app.use(session({
    secret: 'finance',
    resave: false,
    saveUninitialized: true
}));
app.set('view engine', 'pug')

app.get('/', (req,res) => {
  if(!req.session.username) {
    return res.redirect('/login');
  }
  res.render('index')
})
app.get('/login', (req,res) => {
  res.render('login')
})

app.listen(5000)
