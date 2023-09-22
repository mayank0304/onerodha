const express = require('express')

app = express()

app.use(express.static('static'))

app.set('view engine', 'pug')
app.get('/', (req,res) => {
  res.render('index')
})

app.listen(5000)
