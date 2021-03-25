import user from './user-model';
import userVerification from './email-verification-model';
import resetPassword from './reset-password-model';
import session from './session-model';

const authModels = {
  user,
  user_verification: userVerification,
  reset_password: resetPassword,
  session,
};

export default authModels;
