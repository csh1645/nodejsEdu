var express = require('express');
var router = express.Router();
var mdb = require('./mongoose.js')

var Emp = mongoose.model('Emp');

/* GET test page. */
router.post('/', function(req, res, next) {
  //res.render('index', { title: 'index', name : 'cho' });
  console.log(req.param('id'));
  console.log(req.param('pw'));
  console.log(req.param('_id'));

  Emp.findOne({_id:req.param('_id')}).exec(function (err, doc) {
    if( doc ) {
      doc.id = req.param('id');
      doc.pw = req.param('pw');
      doc.save(function (err, product) {
        if(product){
          console.log('Modify and Save : ', product);
          res.redirect('/list');
        }

      });
    }else{
      console.log('Modify Rejected : ', err);
      res.redirect('/update?_id='+req.param('_id'))
    }
  });

  // if(true){
  //     Emp.update( {_id:req.param('_id')}, {'$set': {id:req.param('id'), pw:req.param('pw')} } );
  //     res.redirect('/list')
  // }else{
  //   res.redirect('/update?_id='+req.param('_id'))
  // }


});

module.exports = router;
