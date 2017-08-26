import mongoose from 'mongoose';
import { UserRoleType } from './types';
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
	role: {
		type: UserRoleType,
		required: false,
    default: UserRoleType.base
	}
});

export default mongoose.model('User', userModel);
