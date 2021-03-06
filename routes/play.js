var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.get('/:id', function(req, res, next) {
  var file = JSON.parse(fs.readFileSync('./data/' + req.params.id + '.json', 'utf8'));
  res.render('play', {id: req.params.id, loadtitle: file.title, loaddata: file.data, size: file.data.length});
});

module.exports = router;
