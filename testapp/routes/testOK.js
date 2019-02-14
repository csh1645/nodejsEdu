var express = require('express');
var router = express.Router();

/* GET test page. */
router.post('/', function(req, res, next) {
  //res.render('index', { title: 'index', name : 'cho' });
  console.log(req.param('id'));
  console.log(req.param('pw'));



  if(true){
      res.redirect('list')
  }else{
    res.redirect('test')
  }


});

module.exports = router;
