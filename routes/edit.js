var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id
  var loaddata = JSON.parse(fs.readFileSync('./data/' + id + '.json', 'utf8'));
  var loadsize = loaddata.length
  res.render('edit', {id: id, loaddata: loaddata, loadsize: loadsize});
});

router.post('/save', function(req, res, next){
  var filename = req.body.filename
  var size = req.body.size
  var tmpdata = req.body.savedata.split(',')
  var savedata = []
  var index = 0
  for(var i=0; i<size; i++){
    var row = []
    for(var j=0; j<size; j++){
      row.push(tmpdata[index])
      index += 1
    }
    savedata.push(row)
  }
  fs.writeFile('./data/'+filename+'.json', JSON.stringify(savedata))
  res.redirect(302, '../')
});

module.exports = router;
