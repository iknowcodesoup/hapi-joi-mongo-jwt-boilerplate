import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userModel = new Schema({
	email: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	username: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	token: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	}
});

export default mongoose.model('User', userModel);
