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
router.post('/', (req, res) => {
  const bodyData = [
    req.body.players_player,
    req.body.players_weapon,
    req.body.players_style
  ]
  const sql =
    'INSERT INTO players (players_player, players_weapon, players_style) VALUES (?, ?, ?)'
  mysql.query(sql, bodyData, (err, result) => {
    if (err) {
      res.status(500).send('Error from Database')
    } else {
      res.status(200).json(result)
    }
  })
})

module.exports = router
