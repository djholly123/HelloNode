var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://mc:letmein1001@ds056688.mongolab.com:56688/TheAAMongoCDP?connectTimeoutMS=30000&authMechanism=SCRAM-SHA-1');

var Cat = mongoose.model('Cat', { name: String });




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', function(req, res, next){
  var CatName = req.body.CatName;

  var kitty = new Cat({ name: CatName });
  kitty.save(function (err) {
    if (err) // ...
      console.log('meow');
  });
  res.render('index', {title: 'The AA CDP test node simple 4', Message: 'added a cat ' + CatName + ' to mongo db wow'});
});

module.exports = router;
