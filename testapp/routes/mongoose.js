global.mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//https://mongooseejs.com/docs/queries.html;

//testApp3로 디비명 생성
mongoose.connect('mongodb://localhost/testApp3').
  then(() => console.log('Successfully connected to mongodb')).
  catch(e => console.error(e));
