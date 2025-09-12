// routes/attempts.js
const express = require('express');
const router = express.Router();
const Attempt = require('../models/Attempt');
const verifyToken = require('../middlewares/verifyToken');

router.get('/my-attempts', verifyToken, async (req, res) => {
  try {
      const userId = req.user.id;
    const attempts = await Attempt.find({ userId })
      .sort({ date: -1 }) // newest first based on your 'date' field
      .limit(5);          // max 5 attempts
    res.json(attempts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
