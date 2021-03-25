import mongoose from 'mongoose';

const schema = mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },

  activity: {
    type: String,
    required: true,
  },

  activityStamp: {
    type: Date,
    default: Date,
  },
});

export default mongoose.model('activity_record', schema);
