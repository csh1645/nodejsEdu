var express = require('express');
var router = express.Router();
var mdb = require('./mongoose.js')

var Emp = mongoose.model('Emp');

/* GET test page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'index', name : 'cho' });
  console.log(req.param('_id'));

  Emp.findOne({_id:req.param('_id')}).exec(function (err, doc) {
    if( doc ) {
      doc._id = req.param('_id');
      doc.id = req.param('id');
      doc.pw = req.param('pw');
      doc.remove(function (err, product) {
        if(product){
          console.log('Find and Remove  : ', product);
          res.redirect('/list');
        }

      });
    }else{
      console.log('Delete Rejected : ', err);
      res.redirect('/list')
    }
  });


});

module.exports = router;
