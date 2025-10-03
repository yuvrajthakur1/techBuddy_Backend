// Importing All The Quesitons Model
const dsaQuestionModel = require("../models/QuestionsModels/DSA");


const dsaPracticeRouteController = async (req,res) =>{

    //Query Parameter se type of question mil jaega
    const {type} = req.query;
    const questionType = type.toLowerCase(); 
 

    //Now We have our model to find in QuestionModel 
    try {
       
      // this one is efficient approach bro 
     const randomQuestion = await dsaQuestionModel.aggregate([
     { $match: { category: questionType } },
     { $sample: { size: 1 } }
     ]);

    //  randomQuestion would be array even if there is one element we would have to extarct question it gives all information


        res.json({msg:"Getting Random Question ",randomQuestion:randomQuestion[0]});
      
    } catch (error) {
       console.error(err.message);
       res.status(500).send('Server error');
    }
    
}


module.exports = dsaPracticeRouteController;