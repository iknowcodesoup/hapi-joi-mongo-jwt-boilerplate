
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

export { UserRoleType, MongooseReadyStateType };
