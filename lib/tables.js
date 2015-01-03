module.exports = {};
module.exports.structure = {};

var Promise = require('bluebird');

module.exports.create = function(db) {
	var structure = this.structure || module.exports.structure;
	
	return Promise.try(function() {
		var checks = Object.keys(structure).map(function(name) {
			return db.schema.hasTable(name);
		});
		
		return Promise.all(checks)
	}).then(function(results) {
		var queue = results.map(function(tableExists, i) {
			if (!tableExists) {
				var name = Object.keys(structure)[i];
				return db.schema.createTable(name, structure[name]);
			}
		});

		return Promise.all(queue);
	});
};

/*module.exports.structure.accounts = function(table) {
	table.increments('id').primary();
	// protocol, network, login credentials
};

module.exports.structure.users = function(table) {
	table.increments('id').primary();
	// as who was the author of a certain message known at point of arrival
	// think of hostname, nickname, etc at the time
};

module.exports.structure.rooms = function(table) {
	table.increments('id').primary();
	// in what conversation was a message received (and on which account)
};

module.exports.structure.members = function(table) {
	// who is in which room
};*/

module.exports.structure.messages = function(table) {
	table.increments('id').primary(); // .index().primary() ?
	table.integer('user').unsigned().notNullable();
	table.integer('room').unsigned().nullable();
	table.text('content').nullable();
	table.timestamp('received').notNullable(); // or datetime? do we need notNullable or is it implied?
	table.text('extra').nullable(); // .json()?
};

