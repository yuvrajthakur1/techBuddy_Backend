const User = require('../models/User');


exports.profileController = async(req,res)=>{
    console.log(req.user);
     const {id,email} =  req.user;
     try {
         const user = await User.findById(id);
         res.status(200).json({msg:"User Fetched Successful",user});
     } catch (error) {
         res.status(403).json({msg:"Access Forbidden",error:error.message});
     }
}