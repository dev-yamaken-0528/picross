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

router.post('/save', function(req, res, next){
  var filename = req.body.filename
  var size = req.body.size
  var saveitems = req.body.saveitems

  var tmpitems = saveitems.split(',')
  var savedata = []
  var index = 0
  for(var i=0; i<size; i++){
    var row = []
    for(var j=0; j<size; j++){
      row.push(tmpitems[index])
      index += 1
    }
    savedata.push(row)
  }
  fs.writeFile('./data/'+filename+'.json', JSON.stringify(savedata))

  res.redirect(302, '../')
});

module.exports = router;
