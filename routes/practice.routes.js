const express = require('express');
const router = express.Router();
const dotenv= require('dotenv');
const practiceRouteController = require('../controllers/practice.route.controller');
const verifyToken = require('../middlewares/verifyToken');
const practiceAssesaiController = require('../controllers/practice.assesai.controller');
dotenv.config();






// @route   GET /api/practice/random-question
// @desc    Get a random array question from the database
// @access  Private (should be protected by auth middleware)
//verify token will verify login user and allow protected access
router.get('/random-question',verifyToken,practiceRouteController);





//route for assesment of the random question answer
// This route will be responsible for orchestrating the entire assessment process. It will receive the user's answer and the original question, send a carefully crafted prompt to the Gemini API, and then process and store the result.

router.post('/assess-answer',verifyToken,practiceAssesaiController);



module.exports = router;