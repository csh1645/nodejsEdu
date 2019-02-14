var express = require('express');
var router = express.Router();

/* GET test page. */
router.post('/', function(req, res, next) {
  //res.render('index', { title: 'index', name : 'cho' });
  console.log(req.param('id'));
  console.log(req.param('pw'));
  console.log(req.param('_id'));



  if(true){
      res.redirect('/list')
  }else{
    res.redirect('/update?_id='+req.param('_id'))
  }


});

module.exports = router;
