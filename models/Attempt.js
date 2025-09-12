const mongoose = require('mongoose');

// Define the Attempt Schema
const attemptSchema = new mongoose.Schema({
  // The userId field references the User model
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  question: {
    type: String,
    required: true,
    trim: true
  },
  userAnswer: {
    type: String,
    required: true,
  },
  aiFeedback: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
    min: 0,
    max: 100 // Assuming score is on a scale of 0 to 100
  },
  date: {
    type: Date,
    default: Date.now // Sets the date of the attempt automatically
  }
});

// Create the Mongoose model from the schema
const Attempt = mongoose.model('Attempt', attemptSchema);

module.exports = Attempt;
