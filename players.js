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

module.exports = router
