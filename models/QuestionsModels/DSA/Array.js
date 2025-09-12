const mongoose = require('mongoose');

// Define the schema for a simple question model
const arrayQuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
});

// Create the Mongoose model from the schema
const Array = mongoose.model('Array', arrayQuestionSchema);

module.exports = Array;
