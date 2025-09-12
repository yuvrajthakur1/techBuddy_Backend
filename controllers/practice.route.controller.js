// Importing All The Quesitons Model
const Array = require('../models/QuestionsModels/DSA/Array');
const Stack = require('../models/QuestionsModels/DSA/Stack');
const Sorting = require('../models/QuestionsModels/DSA/Sorting');
const Queue = require('../models/QuestionsModels/DSA/Queue');
const LinkedList= require('../models/QuestionsModels/DSA/LinkedList');
const String = require('../models/QuestionsModels/DSA/String');
const DSAQuestion = require('../models/QuestionsModels/DSA/GeneralDSA');


const practiceRouteController = async (req,res) =>{

    //Query Parameter se type of question mil jaega
    const {type} = req.query;
    let QuestionModel;

    //Type Checking
    switch(type) {
       case 'Array':
        QuestionModel = Array;
        break;
       case 'String':
        QuestionModel = String;
        break;
       case 'LinkedList':
        QuestionModel = LinkedList;
        break;
       case 'Sorting':
        QuestionModel = Sorting;
        break;
       case 'Queue':
        QuestionModel = Queue;
        break;
       case 'DSAQuestion':
        QuestionModel = DSAQuestion;
        break;
       case 'Stack':
        QuestionModel = Stack;
        break;
      default:
        return res.status(400).json({ msg: 'Invalid question type provided' });
    }

    //Now We have our model to find in QuestionModel
     
    try {
       
      //Countin how many records model have
       const count = await QuestionModel.countDocuments();

       //If it is zero no need to give resonse
        if (count === 0) {
        return res.status(404).json({ msg: `No questions found for type: ${type}` });
           }


        //Finding Random index for searching random question from model
        const randomIndex = Math.floor(Math.random() * count);   
        const randomQuestion = await QuestionModel.findOne().skip(randomIndex);

        res.json({msg:"Getting Random Question ",randomQuestion});
      
    } catch (error) {
       console.error(err.message);
       res.status(500).send('Server error');
    }
    
}


module.exports = practiceRouteController;