var express = require('express');
var router = express.Router();
var temp=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  temp+=1;
  res.send('user accesses are: '+temp);
});

module.exports = router;
