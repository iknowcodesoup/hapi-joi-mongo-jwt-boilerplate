import getStatusRoute from './status/getStatusRoute';
import createUserRoute from './users/createUserRoute';
import generateTokenRoute from './auth/generateTokenRoute';
import getUsersRoute from './users/getUsersRoute';
import updateUserRoute from './users/updateUserRoute';

export default [getStatusRoute, generateTokenRoute, createUserRoute, getUsersRoute, updateUserRoute];
