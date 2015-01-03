var tables = require('./lib/tables');
var Promise = require('bluebird');
var knex = require('knex');

var db = knex.initialize({ // TODO: read from config file
	client: "sqlite3",
	connection: {
		filename: ":memory:"
	}
});

// As this is a personal BNC setup, we will not design for multiple users
// sharing one database for e.g. disk saving. Every user deserves its own db
// (can be in memory sqlite3) and its own node process for proper security and
// privacy and all the things you would want from a chat client..

tables.create(db).then(function() {
	var webserver = require('./lib/webserver').create(db);
	webserver.listen(3000); // TODO: handle error
}).error(function(err) {
	console.log("messed up sql:", err);
	process.exit(1); // TODO: make this entire error handler more sensible
});

