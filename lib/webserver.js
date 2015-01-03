module.exports = {};

var express = require('express');
var routes = require('./routes');

module.exports.create = function(db) {
	var app = express();

	app.use(express.static('public'));

	app.use(function(req, res, next) {
		req.db = db; // TODO: ugh
	});

	app.use('/api', routes);

	return app;
};

