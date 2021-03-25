import authModels from '../model';

const userService = {};

userService.getUserById = async (userId) => {
  return authModels.user.findById(userId, {
    password: 0,
    is_email_verified: 0,
    is_deleted: 0,
    __v: 0,
  });
};

export default userService;
