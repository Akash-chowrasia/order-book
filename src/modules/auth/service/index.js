import assert from 'assert';
import createError from 'http-errors-lite';
import { StatusCodes } from 'http-status-codes';
import md5 from 'md5';
import { nanoid } from 'nanoid';
import productModels from '../../products/model';
import authModels from '../model';

const authService = {};

const genVerificationCode = async (email) => {
  const verificationCode = nanoid(50);
  await authModels.user_verification.create({
    verification_code: verificationCode,
    email,
  });
  return verificationCode;
};

authService.registerUser = async (data) => {
  const hashedPassword = md5(data.password);
  const { email } = data;

  const emailExist = await authModels.user.findOne({ email });
  assert(
    emailExist === null,
    createError(StatusCodes.FORBIDDEN, 'This user already registered')
  );

  const user = await authModels.user.create({
    ...data,
    password: hashedPassword,
  });

  await productModels.wallet.create({ user_id: user._id });
  return {
    id: user._id,
    verification_code: await genVerificationCode(email),
    status: true,
  };
};

authService.loginUser = async ({ email, password }) => {
  const user = await authModels.user.findOne({ email });
  assert(user !== null, createError(StatusCodes.BAD_REQUEST, 'Login Failed'));
  assert(
    md5(password) === user.password,
    createError(StatusCodes.UNAUTHORIZED, 'Incorrect Password')
  );
  return {
    user: user._id,
    status: true,
  };
};

authService.verifyEmail = async ({ verification_code, email }) => {
  const record = await authModels.user_verification.findOne({
    verification_code,
  });

  assert(
    record !== null,
    createError(
      StatusCodes.BAD_REQUEST,
      'either you are verified or you entered a wrong verification code'
    )
  );

  await authModels.user.updateOne({ email }, { is_email_verified: true });

  await authModels.user_verification.deleteOne({
    verification_code,
  });
  return {
    status: true,
  };
};

authService.resetPasswordRequest = async (email) => {
  const token = nanoid(50);
  await authModels.reset_password.create({ token, email });
  return token;
};

authService.resetPassword = async ({ token, new_password: newPassword }) => {
  const user = await authModels.reset_password.findOne({ token });
  assert(
    'user' !== null,
    createError(StatusCodes.NOT_ACCEPTABLE, 'cannot reset password ....')
  );
  const { email } = user;
  const hashPassword = md5(newPassword);
  await authModels.user.updateOne({ email }, { password: hashPassword });
  await authModels.reset_password.deleteOne({ token });
  return {
    status: true,
  };
};

authService.changePassword = async ({
  old_password: oldPassword,
  new_password: newPassword,
  user_id: userId,
}) => {
  const user = await authModels.user.findById(userId);
  assert(
    md5(oldPassword) === user.password,
    createError(
      StatusCodes.UNAUTHORIZED,
      'Please enter the correct old password '
    )
  );

  const hashPassword = md5(newPassword);
  await authModels.user.findByIdAndUpdate(userId, { password: hashPassword });
  return {
    status: true,
  };
};

authService.deleteUser = async (userId) => {
  await authModels.user.findByIdAndUpdate(userId, { is_deleted: true });
};

authService.logoutUser = async (clientSession) => {
  await authModels.session.deleteOne({ session_id: clientSession });
};

export default authService;
