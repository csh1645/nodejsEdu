var express = require('express');
var router = express.Router();
var mdb = require('./mongoose.js')


//mongoose.js 로 이동(global 선언)
//npm install mongoose
// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
//
// //https://mongooseejs.com/docs/queries.html;
//
// //testApp3로 디비명 생성
// mongoose.connect('mongodb://localhost/testApp3').
//   then(() => console.log('Successfully connected to mongodb')).
//   catch(e => console.error(e));

var empSchema = mongoose.Schema({
  id : String,
  pw : String
},
{
  versionKey : false
}
);

var Emp = mongoose.model('Emp', empSchema);

/* GET test page. */
router.post('/', function(req, res, next) {
  //res.render('index', { title: 'index', name : 'cho' });
  console.log(req.param('id'));
  console.log(req.param('pw'));

  var e = new Emp({id : req.param('id'), pw : req.param('pw')});
  e.save().then((product) => {
      console.log('Save Resolvd : ', product);
      res.redirect('/list');
    }, (err) =>{
      console.log('Save Rejected : ', err);
      res.redirect('/test');
    });

  //emps로 테이블 생성(예: dept << depts)후 데이터 저장


  // if(true){
  //     res.redirect('list')
  // }else{
  //   res.redirect('test') }


});

module.exports = router;
