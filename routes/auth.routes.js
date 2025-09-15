const express = require('express');
const { resgisterController, loginController,logoutController, forgotController, resetController } = require('../controllers/auth.controller');
const router = express.Router();




// User Signup route...
router.post("/register", resgisterController);


// User Login route...
router.post("/login", loginController);

//User Logout route
router.post("/logout",logoutController);
  


//User Password Forget Route
router.post("/forgot-password",forgotController);


//User Reset Password route
router.post("/reset-password/:token",resetController);

module.exports = router;