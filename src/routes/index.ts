import getStatusRoute from './status/getStatusRoute';
import getUserRoute from './users/getUserRoute';
import createUserRoute from './users/createUserRoute';
import generateTokenRoute from './auth/generateTokenRoute';
import validateTokenRoute from './auth/validateTokenRoute';
import getUsersRoute from './users/getUsersRoute';
import updateUserRoute from './users/updateUserRoute';

export default [getStatusRoute, generateTokenRoute, getUserRoute, createUserRoute, getUsersRoute, validateTokenRoute, updateUserRoute];
