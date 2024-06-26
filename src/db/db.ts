const mongoose = require('mongoose')
const MONGODB_URI = require('../config');

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URI.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    process.exit(1);
  }
};

export default dbConnect;