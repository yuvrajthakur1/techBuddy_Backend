const express = require('express');
const { resgisterController, loginController,logoutController } = require('../controllers/auth.controller');
const router = express.Router();




// User Signup route...
router.post("/register", resgisterController);


// User Login route...
router.post("/login", loginController);

//User Logout route
router.post("/logout",logoutController);
  


module.exports = router;