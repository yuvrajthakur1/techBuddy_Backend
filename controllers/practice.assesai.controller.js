const Attempt = require('../models/Attempt');
const dotenv = require('dotenv');
dotenv.config();
// Gemini api set up
const { GoogleGenAI } = require("@google/genai");
const genAI = new GoogleGenAI({});


//Controller starts
const practiceAssesaiController = async (req, res) => {

  const { question, userAnswer } = req.body;
  const userId = req.user.id; // Assuming authMiddleware sets user on req
  
  if (!question || !userAnswer) {
    return res.status(400).json({ msg: 'Question and answer are required' });
  }

  const prompt = `You are a professional technical/HR interviewer you have to change your role according to the type of question that candidate  will ask switch your role between techinal/hr interviewer. A candidate was asked the following question:
  Question: "${question}"
  The candidate's response was: "${userAnswer}"
  
 Please provide constructive feedback in simple language that is understandable easily and a score out of 100 for the response. Your response must be in a JSON format with two keys: "feedback" (string) and "score" (number). Do not add any other text outside the JSON object.`;

  try {
    console.log("Content Generate Karwane to Agyr");
    const result = await genAI.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

 console.log("Content Generate Karwane to Agyr22");


   // Extract text from the first candidate
   

     const response =  result.candidates[0].content.parts[0].text;
     const  apiResponse = response.replace(/^```json\s*/, '').replace(/```$/, '').trim();
     const  plainjsResponse = JSON.parse(apiResponse);
     
     const feedback = plainjsResponse.feedback;
     const score = plainjsResponse.score;
      
  
  

    // Save the attempt to the database
    const newAttempt = new Attempt({
      userId,
      question,
      userAnswer,
      aiFeedback: feedback,
      score:score,
    });

    await newAttempt.save();

    res.json({msg:"You Got Your Response",feedback,score});

  } catch (error) {
    console.error('Gemini API or database error:', error);
    res.status(500).send('Server error during assessment.');
  }
}


module.exports = practiceAssesaiController;