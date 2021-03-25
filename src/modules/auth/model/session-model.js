import mongoose from 'mongoose';

const schema = mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  session_id: {
    type: String,
    required: true,
  },
});

export default mongoose.model('session_tokens', schema);
