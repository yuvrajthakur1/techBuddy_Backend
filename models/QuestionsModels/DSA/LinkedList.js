const mongoose = require('mongoose');

// Define the schema for a simple question model
const linkedListQuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
});

// Create the Mongoose model from the schema
const LinkedList = mongoose.model('LinkedList', linkedListQuestionSchema);

module.exports = LinkedList;
