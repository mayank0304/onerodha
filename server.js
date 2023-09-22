const express = require('express')
const session = require('express-session')

const api = require('./routes/api')

app = express()

app.use(express.json())
app.use(express.static('static'))
app.use('/api',api)
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
