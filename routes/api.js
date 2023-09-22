const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3')

const db = new sqlite3.Database('onerodha.db')

router.post("/login", (req,res) => {
  if(!req.body.username || !req.body.password) {
    return res.sendStatus(400)
  }
  db.get('SELECT user_id FROM users WHERE username = ? AND password = ?', [req.body.username, req.body.password], (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'Database error.' });
    }
    if (row) {
      return res.json({ message: 'Login successful.' });
    } else {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
  });
})

module.exports = router
