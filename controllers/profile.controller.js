const User = require('../models/User');


exports.profileController = async(req,res)=>{
     const {id,email} =  req.user;
     console.log(email,id);
     try {
         const user = await User.findById(id);
         res.status(200).json({msg:"User Fetched Successful",user});
     } catch (error) {
         res.status(403).json({msg:"Access Forbidden",error:error.message});
     }
}