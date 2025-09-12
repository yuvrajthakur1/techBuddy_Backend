const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();



const  verifyToken = (req,res,next) => {
    const token = req?.cookies?.token;
    console.log("Token to milgya 1");
    if(!token) return res.status(401).json({msg:"No Token"});
     console.log("Token to milgya 2");
    try {
      const decode =  jwt.verify(token,process.env.JWT_SECRET);
      req.user = decode;
      console.log("Verify To Hogy");
      next();
    } catch (error) {
      
      res.status(404).json({msg:"Invalid Token Here"});
    }
}

module.exports = verifyToken;