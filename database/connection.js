const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
  await mongoose.connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    () => console.log('connected to db')
  );
};

module.exports = connectDB;
