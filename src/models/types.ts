import { Request } from "@hapi/hapi";
import { IUser } from "./User";

enum UserRoleType {
  base = 10,
  su = 100
};

enum MongooseReadyStateType {
  disconnected = 0,
  connected = 1,
  connecting = 2,
  disconnecting = 3
};

interface IUserRequest extends Request {
  payload: IUser;
}

type IUserPreRequest = IUserRequest & {
  pre: {
    user: IUser
  };
};

export { UserRoleType, MongooseReadyStateType, IUserRequest, IUserPreRequest };
