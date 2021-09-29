const express = require('express')
const mysql = require('./db-config')

const router = express.Router()

router.get('/', (req, res) => {
  mysql.query(`SELECT * FROM players`, (err, result) => {
    if (err) {
      res.status(500).send('Error from Database')
    } else {
      res.status(200).json(result)
    }
  })
})
router.get('/:id', (req, res) => {
  const playerId = req.params.id
  mysql.query('SELECT * FROM players WHERE id=?', [playerId], (err, result) => {
    if (err) {
      res.status(500).send('error from database')
    } else {
      res.status(200).json(result)
    }
  })
})
router.post('/', (req, res) => {
  const bodyData = [req.body.player, req.body.weapon, req.body.style]
  const sql = 'INSERT INTO players (player, weapon, style) VALUES (?, ?, ?)'
  mysql.query(sql, bodyData, (err, result) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).json(result)
    }
  })
})

router.delete('/:id', (req, res) => {
  const playerId = req.params.id
  mysql.query('DELETE FROM players WHERE id= ?', [playerId], (err, result) => {
    if (err) {
      res.status(500).status('Error deleted')
    } else {
      res.status(200).send('Player deleted')
    }
  })
})
module.exports = router
