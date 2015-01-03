var express = require('express');

var router = module.exports = express.Router(); // TODO: promise router

router.get('/version', function(req, res, next) {
	res.send("0.0.0");
});

