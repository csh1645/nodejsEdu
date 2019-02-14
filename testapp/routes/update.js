var express = require('express');
var router = express.Router();

/* GET test page. */
router.get('/', function(req, res, next) {
  var _id = req.param('_id')
  console.log(_id);
  res.render('update', { title : 'update', _id : _id, vo : '{"_id" : 1, "id" : "admin", "pw":"1234"}'  });
});

module.exports = router;
