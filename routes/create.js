var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('create', { title: 'ステージ作成' });
});

router.post('/save', function(req, res, next) {
  // ファイル名
  var readdir = fs.readdirSync('./data/')
  readdir.shift() //.gitkeep
  var max = 0
  if(readdir.length != 0){
    var filenames = []
    readdir.forEach(function(filename){
      filenames.push(filename.replace(/.json/g, ''))
    })
    filenames.sort(compareNumbers)
    max = filenames[filenames.length-1]
  }
  var filename = Number(max)+1
  // 保存
  var tmpdata = req.body.savedata.split(',')
  var savedata = []
  var index = 0
  for(var i=0; i<req.body.size; i++){
    var row = []
    for(var j=0; j<req.body.size; j++){
      row.push(tmpdata[index])
      index += 1
    }
    savedata.push(row)
  }
  fs.writeFile('./data/'+filename+'.json', JSON.stringify(savedata))
  res.redirect(302, '../')
});

function compareNumbers(a, b) {
  return a - b
}

module.exports = router;
