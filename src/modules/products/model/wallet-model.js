import mongoose from 'mongoose';

const schema = mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  amount: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model('wallet', schema);
