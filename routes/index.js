/*eslint-disable*/
var express = require('express');
var router = express.Router();

router.all('*', function(req, res, next) {
  return res.sendFile( __base+'dist/index.html' );
});

module.exports = router;