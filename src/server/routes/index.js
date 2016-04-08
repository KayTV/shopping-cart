var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');
function Products() {
  return knex('products');
}

router.get('/products', function(req, res, next) {
  Products().select()
  .then(function(products){
    res.json(products);
  })
});

module.exports = router;
