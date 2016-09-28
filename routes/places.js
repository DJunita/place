var express = require('express');
var router = express.Router();
var connection = require('../helper/connection');
var mysql = require('mysql');
var moment = require('moment');

/* GET home page. */

/* GET places listing. */
router.get('/', function index(req, res) {
  var sql = "SELECT * FROM places";
    connection.query(sql, function (err, rows) {
      if (err) throw err;
      res.render('place/index', {title : 'Places',
    places: rows});
    });
});

router.get('/create', function create(req, res) {
    console.log('tesssss');
  var create = {
    title: "Place - New Place",
    navigationTitle: 'New Place',
    action: '/create',
    create: true,
    data: {
      name: 'name',
      address: 'address',
      description: 'description',
      longitude: 'longitude',
      latitude: 'latitude'
    },
  };

  res.render('place/detail', create);
});

router.get('/:id', function index(req, res) {
  var sql = "SELECT * FROM places where id = ?";
  var inserts = [req.params.id];
  sql = mysql.format(sql, inserts);
    connection.query(sql, function (err, rows) {
      if (err) throw err;
      res.render('place/detail', {title : 'Detail Place',
    place: rows[0]});
    });
});

router.post('/', function index(req, res) {
  delete req.body.id;
  delete req.body.updatedAt;
  delete req.body.createdAt;
  var inserts ={'name' : req.body.name};
  inserts.createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  inserts.updatedAt = moment().format('YYYY-MM-DD HH:mm:ss');
  connection.query('INSERT INTO places SET ?', inserts, function (err, result) {
    if (err) throw err;
    var contype = req.headers['content-type'];
    if (!contype || contype.indexOf('application/json') !== 0)
      res.redirect('/places');
    else
      res.send(result.insertId.toString());
  });
});;

module.exports = router;
