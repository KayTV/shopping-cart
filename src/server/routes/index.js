var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');
function Products() {
  return knex('products');
}

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
