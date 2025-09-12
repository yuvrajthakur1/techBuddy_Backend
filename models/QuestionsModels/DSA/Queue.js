const mongoose = require('mongoose');

// Define the schema for a simple question model
const queueQuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
});

// Create the Mongoose model from the schema
const Queue = mongoose.model('Queue', queueQuestionSchema);

module.exports = Queue;
