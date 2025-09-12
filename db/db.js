const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


// Function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the URI from environment variables
    await mongoose.connect(process.env.MONGO_URI);
    
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;