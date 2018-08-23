var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var readdata = fs.readdirSync('./data/')
  var data = []
  readdata.forEach(function(filename){
    data.push(filename.replace(/.json/g, ''))
  })
  data.sort(compareNumbers)
  data.shift() //.gitkeep
  res.render('index', { title: 'INDEX!', data: data });
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
