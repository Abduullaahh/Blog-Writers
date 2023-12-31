const express = require("express");
const router = express.Router();
const {connection} = require('../database/db')

router.get('/', async (req, res) => {
  
    const queryResult = await new Promise((resolve, reject) => {
      connection.query('SELECT * FROM blogs', (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
    res.json(queryResult);
});

module.exports = router;
