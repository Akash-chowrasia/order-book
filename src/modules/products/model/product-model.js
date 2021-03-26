import mongoose from 'mongoose';

const schema = mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },

  category: {
    type: String,
    enum: ['furniture', 'cloths', 'toys'],
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  amount: {
    type: Number,
    default: 1,
  },

  date: {
    type: Date,
    default: Date,
  },
});

export default mongoose.model('product', schema);
