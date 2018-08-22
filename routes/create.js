var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('create', { title: 'CREATE!' });
});

router.post('/save', function(req, res, next) {
  var readdata = fs.readdirSync('./data/')
  var max = 0
  if(readdata.length != 0){
    var tmpdata = []
    readdata.forEach(function(filename){
      tmpdata.push(filename.replace(/.json/g, ''))
    })
    tmpdata.sort(compareNumbers)
    max = tmpdata[tmpdata.length-1]
  }
  var nextid = Number(max)+1

  var tmpitems = req.body.saveitems.split(',')
  var savedata = []
  var index = 0
  for(var i=0; i<req.body.size; i++){
    var row = []
    for(var j=0; j<req.body.size; j++){
      row.push(tmpitems[index])
      index += 1
    }
    savedata.push(row)
  }
  fs.writeFile('./data/'+nextid+'.json', JSON.stringify(savedata))
  res.redirect(302, '../')
});

function compareNumbers(a, b) {
  return a - b
}

module.exports = router;
