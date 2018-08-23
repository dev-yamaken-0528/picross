var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.get('/:id', function(req, res, next) {
  var filename = req.params.id
  var loaddata = JSON.parse(fs.readFileSync('./data/' + filename + '.json', 'utf8'));
  var size = loaddata.length
  res.render('play', {loaddata: loaddata, size: size});
});

module.exports = router;
