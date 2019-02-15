var express = require('express');
var router = express.Router();
var mdb = require('./mongoose.js')

var Emp = mongoose.model('Emp');

/* GET test page. */
router.get('/', function(req, res, next) {

  Emp.find({}, function (err, vos) {
    console.log(JSON.stringify(vos));
    res.render('list', {title : 'list', list:JSON.stringify(vos)})

  })

  // res.render('list', { title: 'list', name : 'cho', datas : '[{"_id" : 1, "id" : "admin", "pw":"1234"},{"_id" : 2, "id" : "admin2", "pw":"2222"}]' });
});

module.exports = router;
