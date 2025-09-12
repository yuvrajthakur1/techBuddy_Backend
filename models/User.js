const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true // Removes whitespace from both ends of a string
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures no two users can have the same email
    lowercase: true, // Converts email to lowercase before saving
    trim: true,
  },
  password: {
    type: String,
    required: true,
    select:false
  },
  occupation: {
    type: String,
    required: false,
    trim: true
  },
  college: {
    type: String,
    required: false,
    trim: true
  },
  city: {
    type: String,
    required: false,
    trim: true
  }
});

// Middleware to hash the password before saving the user document
// 'pre' hook runs before a save event on the document
userSchema.pre('save', async function(next) {
  // Only hash the password if it has been modified or is new
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10); // Generate a salt with 10 rounds
    this.password = await bcrypt.hash(this.password, salt); // Hash the password with the salt
    next();
  } catch (error) {
    next(error); // Pass any errors to the next middleware
  }
});

// Create the Mongoose model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
