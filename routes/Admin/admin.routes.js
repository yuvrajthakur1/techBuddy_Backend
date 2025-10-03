const express = require('express')
const DSAQ = require('../../models/QuestionsModels/DSA');
const User = require('../../models/User');
const Attempt = require("../../models/Attempt");
const verifyToken = require("../../middlewares/verifyToken");
const isAdmin = require("../../middlewares/isAdmin");
const router = express.Router();

// Existing route
router.get("/stats",verifyToken,isAdmin,async (req, res) => {
  try {
    const totalUsers = await User.countDocuments(); // total users
    const totalAttempts = await Attempt.countDocuments(); // total Attempts
    const totalQuestions = await DSAQ.countDocuments(); // total questions
    const last5DaysAttempts = await Attempt.aggregate([
    // 1 Filter last 5 days
  {
    $match: {
      date: {
        $gte: new Date(new Date().setDate(new Date().getDate() - 5)),
      },
    },
  },
  // 2 Group by date only (ignore time)
  {
    $group: {
      _id: {
        $dateToString: { format: "%Y-%m-%d", date: "$date" },
      },
      totalAttempts: { $sum: 1 },
    },
  },
  // 3️⃣ Sort descending (latest first)
  { $sort: { _id: -1 } },
  // 4️⃣ Limit to 5 results (optional)
  { $limit: 5 },
                                                            ]);
    res.json({ totalUsers, totalAttempts,totalQuestions,last5DaysAttempts});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
