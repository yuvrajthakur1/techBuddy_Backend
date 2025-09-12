const mongoose = require('mongoose');

// Define the schema for a simple question model
const generalDSAQuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
});

// Create the Mongoose model from the schema
const DSAQuestion = mongoose.model('DSAQuestion', generalDSAQuestionSchema);

module.exports = DSAQuestion;
