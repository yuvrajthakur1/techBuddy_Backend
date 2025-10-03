const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');
const crypto = require('crypto');
const sendEmail = require('../config/email');
dotenv.config();



//resgistercontroller
const resgisterController = async (req, res) => {
  const { name, email, password, occupation, college, city } = req.body;
  if(!name||!email||!password||!occupation||!college||!city) {
    return res.status(400).json({message:"All Fields Are Required"});
  }
  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      console.log("User Already Exists");
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create a new user instance
    user = new User({
      name,
      email,
      password,
      occupation,
      college,
      city,
    });

    // The password will be hashed automatically by the pre-save middleware in the User model
    await user.save();

    // For now, we'll just send a success message
    res.status(201).json({ msg: 'User registered successfully' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}

//loginController
const loginController = async (req, res) => {
  const { email, password } = req.body;

  // Check if all fields are provided
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {

    // Check if the user exists
    let user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Comparing the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Creating a JWT payload
   


    // Token Created
    const token = jwt.sign({id:user._id,email:user.email,role:user.role},process.env.JWT_SECRET,
      {
        expiresIn:'1h',
      },)

    
    //Ye hua cookie mei save
     res.cookie('token', token, {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: false, // Use secure cookies in production
      sameSite:"none",
      maxAge: 3600000, // 1 hour in milliseconds
      path:"/"
    });

    user = await User.findOne({ email });
    res.status(200).json({msg:"User Logged In Successfully",user});

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};



//Logout route 

const logoutController = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false, // keep true if using HTTPS
    sameSite: "none",
    path:"/"
  });
  res.status(200).json({ message: "Logged out successfully" });
}


//forgot password route

const forgotController = async (req, res) => {

  // 1. Get user based on POSTed email
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: 'No user found with that email address.' });
  }

  
  // 2. Generate the random reset token using JWT
  const resetToken = crypto.randomBytes(32).toString("hex");
  user.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  user.resetPasswordExpires = Date.now() + 15 * 60 * 1000; // 15 min
  await user.save();

  // 3. Send it to user's email
  const resetURL = `https://techbuddyfrontend.netlify.app/reset-password/${resetToken}`;

  const message = `
    <h1>You have requested a password reset</h1>
    <p>Please go to this link to reset your password:</p>
    <a href="${resetURL}" target="_blank">${resetURL}</a>
  `;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Your Password Reset Token (Valid for 10 min)',
      html: message,
    });

    res.status(200).json({
      status: 'success',
      message: 'Token sent to email!',
    });
  } catch (err) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
    return res.status(500).json({ message: 'There was an error sending the email. Try again later.' });
  }
};



// reset password controller

const resetController =  async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    console.log("token aur password to milgya")
    //Find user by hashed token that was stored 
   const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
     console.log("token hash karida")
  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpires: { $gt: Date.now() },
  });

     console.log("User milaki nahi dekh rhe");
    if (!user) return res.status(400).json({ message: "Invalid or expired token" });
      
     console.log("User milgya ");
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({
      status: 'success',
      message: 'Password has been reset successfully.',
    });
  } catch (error) {
    // This will catch JWT errors like 'TokenExpiredError' or 'JsonWebTokenError'
    return res.status(400).json({ message: 'Token is invalid or has expired.' });
  }
};

module.exports = {resgisterController,loginController,logoutController,forgotController,resetController};