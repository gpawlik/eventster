import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
	username: { type: String, unique: true }, // unique not working if not specified in DB itself?
	email: { type: String, unique: true },
	password: String,
	createdAt: Date,
	updatedAt: { 
		type: Date, 
		default: Date.now 
	},
});

export default mongoose.model('User', UserSchema);