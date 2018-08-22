var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id
  res.render('edit', { title: 'EDIT!', id : id });
});

module.exports = router;
