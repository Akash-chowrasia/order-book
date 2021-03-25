import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },

  manager_id: {
    type: mongoose.Types.ObjectId,
    default: null,
  },

  email: {
    type: String,
  },

  role: {
    type: String,
    enum: ['ROOT', 'ROOT OPERATOR', 'MERCHANT', 'OPERATOR'],
    default: 'MERCHANT',
  },

  password: {
    type: String,
  },

  is_email_verified: {
    type: Boolean,
    default: false,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('user_models', userSchema);
