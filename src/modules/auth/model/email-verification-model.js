import mongoose from 'mongoose';

const schema = mongoose.Schema({
  verification_code: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.model('email_verification_codes', schema);
