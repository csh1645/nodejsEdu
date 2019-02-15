var express = require('express');
var router = express.Router();
var mdb = require('./mongoose.js')

var Emp = mongoose.model('Emp');


/* GET test page. */
router.get('/', function(req, res, next) {
  var _id = req.param('_id')
  console.log(_id);

  Emp.find({_id:_id}, function (err, vos) {
    console.log(JSON.stringify(vos));
    res.render('update', {title : 'update', list:JSON.stringify(vos)[0]})

  })

  // res.render('update', { title : 'update', _id : _id, vo : '{"_id" : 1, "id" : "admin", "pw":"1234"}'  });
});

module.exports = router;
