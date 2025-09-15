const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();



const  verifyToken = (req,res,next) => {
    const token = req?.cookies?.token;
    if(!token) return res.status(401).json({msg:"No Token"});
    try {
      const decode =  jwt.verify(token,process.env.JWT_SECRET);
      req.user = decode;
      next();
    } catch (error) {
      res.status(404).json({msg:"Invalid Token Here"});
    }
}

module.exports = verifyToken;