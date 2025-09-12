const express = require('express');
const verifyToken = require('../middlewares/verifyToken')
const {profileController } = require('../controllers/profile.controller');
const router = express.Router();

router.get("/profile",verifyToken,profileController);

module.exports = router;