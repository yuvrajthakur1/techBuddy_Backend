const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();



const dsaSchema = new mongoose.Schema({
    question:{
      type:String,
      required:true
    },
    category:{
      type:String,
      enum:["array","string","sorting","linkedlist","queue","generaldsa","stack"],
      required:true
    }
})


const DSAQ= mongoose.model('DSAQ',dsaSchema);
module.exports = DSAQ;