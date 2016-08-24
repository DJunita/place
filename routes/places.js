var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('place/index', {title : 'Place'});
});
router.get('/detail', function(req, res, next) {
  res.render('place/detail', {title : 'Place Detail'});
});
module.exports = router;
