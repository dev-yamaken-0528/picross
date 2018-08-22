var express = require('express');
var router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id
  var data = JSON.parse(fs.readFileSync('./data/' + id + '.json', 'utf8'));
  var vh = data.length
  res.render('play', { title: 'PLAY!', data: data, vh: vh});
});

module.exports = router;
