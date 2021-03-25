const mongoose = require('mongoose');

const URL = process.env.URL || 'mongodb://localhost/order_book';

(async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Database connection error');
  }
})();
