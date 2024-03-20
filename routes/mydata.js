var express = require('express');
var router = express.Router();

/* GET home page with mydata instead of index. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'William Colbert' });
});

module.exports = router;
