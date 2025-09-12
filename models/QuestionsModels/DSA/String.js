const mongoose = require('mongoose');

// Define the schema for a simple question model
const stringQuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
});

// Create the Mongoose model from the schema
const Striing = mongoose.model('String', stringQuestionSchema);

module.exports = Striing;
