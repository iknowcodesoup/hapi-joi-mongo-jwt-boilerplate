import * as mongoose from 'mongoose';
import { UserRoleType } from './types';

const userSchema = new mongoose.Schema({
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
},
{
  timestamps: true
});

export interface IUser extends mongoose.Document {
  username: string;
  email: string;
  role: UserRoleType;
  createdAt: Date;
  updateAt: Date;
  validatePassword(requestPassword: string): boolean;
};

export const User = mongoose.model<IUser>('User', userSchema);