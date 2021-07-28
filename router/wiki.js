const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.send('wiki root');
})

router.get('/about', (req, res) => {
  res.send('wiki about')
})

router.get('/hello', (req, res) => {
  res.send('wiki hello')
})

module.exports = router;