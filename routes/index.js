var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var filenames = fs.readdirSync('./data/')
  var ids = []
  filenames.forEach(function(filename){
    ids.push(filename.replace(/.json/g, ''))
  })
  ids.sort(compareNumbers)
  ids.shift() //.gitkeep
  res.render('index', {ids: ids});
});

router.get('/delete/:id', function(req, res, next) {
  var id = req.params.id
  fs.unlink('./data/'+id+'.json', function(err){
    res.redirect(302, '../')
  })
});

function compareNumbers(a, b) {
  return a - b
}

module.exports = router;
