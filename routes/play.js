var express = require('express');
var router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  var readdata = JSON.parse(fs.readFileSync('./data/001.json', 'utf8'));
  res.render('play', { title: 'PLAY!', readdata: readdata});
});

module.exports = router;
