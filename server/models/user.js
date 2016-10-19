var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: String,
	email: String,
	password: String,
	createdAt: Date,
	updatedAt: { 
		type: Date, 
		default: Date.now 
	},
});

module.exports = mongoose.model('User', UserSchema);