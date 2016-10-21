import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const EventSchema = new Schema({
	title: { type: String, unique: true },
	headline: { type: String, unique: true },
	descriptios: String,
    date: Date,
	createdAt: Date,
	updatedAt: { 
		type: Date, 
		default: Date.now 
	},
});

export default mongoose.model('Event', EventSchema);