var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id
  var data = JSON.parse(fs.readFileSync('./data/' + id + '.json', 'utf8'));
  var size = data.length
  res.render('edit', { title: 'EDIT!', id: id, size: size, data: data });
});

module.exports = router;
