var express = require('express');
var router = express.Router();
var connection = require('../helper/connection');
var mysql = require('mysql');
var globalize = require('globalize');

// Globalize

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('place/index', {title : 'Place'});
}); */
router.get('/detail', function(req, res, next) {
  res.render('place/detail', {title : 'Place Detail'});
});


/* GET places listing. */
router.get('/', function index(req, res) {
  var sql = "SELECT * FROM places";
    connection.query(sql, function (err, rows) {
      if (err) throw err;
      res.render('place/index', {title : 'Places',
    places: rows});
    });
});

module.exports = router;
