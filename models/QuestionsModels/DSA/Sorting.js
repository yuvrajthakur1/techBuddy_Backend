const mongoose = require('mongoose');

// Define the schema for a simple question model
const sortingQuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
});

// Create the Mongoose model from the schema
const Sorting = mongoose.model('Sorting', sortingQuestionSchema);

module.exports = Sorting;
