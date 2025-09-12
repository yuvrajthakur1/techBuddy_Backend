const mongoose = require('mongoose');

// Define the schema for a simple question model
const stackSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
});

// Create the Mongoose model from the schema
const Stack = mongoose.model('Stack', stackSchema);

module.exports = Stack;
