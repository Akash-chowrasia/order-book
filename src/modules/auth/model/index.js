import user from './user-model';
import userVerification from './email-verification-model';
import resetPassword from './reset-password-model';
import session from './session-model';
import activityStore from './user-activity';

const authModels = {
  user,
  user_verification: userVerification,
  reset_password: resetPassword,
  session,
  activity_store: activityStore,
};

export default authModels;
