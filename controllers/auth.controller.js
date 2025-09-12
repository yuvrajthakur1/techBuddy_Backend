const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


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
   


    // Token Crested
    const token = jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,
      {
        expiresIn:'1h',
      },)

    
    //Ye hua cookie mei save
     res.cookie('token', token, {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: false, // Use secure cookies in production
      maxAge: 3600000, // 1 hour in milliseconds
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
    secure: true, // keep true if using HTTPS
    sameSite: "strict",
  });
  res.status(200).json({ message: "Logged out successfully" });
}

module.exports = {resgisterController,loginController,logoutController};