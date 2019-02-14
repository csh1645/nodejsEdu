var express = require('express');
var router = express.Router();

/* GET test page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'index', name : 'cho' });
  console.log(req.param('_id'));



  if(true){
      res.redirect('/list')
  }else{
    res.redirect('/list')
  }


});

module.exports = router;
