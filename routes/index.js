var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('auth/login', { title: 'Gearev Place' });
});

module.exports = router;
