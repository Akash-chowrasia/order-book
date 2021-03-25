import mongoose from 'mongoose';

const schema = mongoose.Schema({
  product_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  user_id: {
    type: mongoose.Types.ObjectId,
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
  date: {
    type: Date,
    default: Date,
  },
});

export default mongoose.model('sold_record', schema);
