const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Array = require("./models/QuestionsModels/DSA/Array");
const LinkedList = require("./models/QuestionsModels/DSA/LinkedList");
const Queue = require("./models/QuestionsModels/DSA/Queue");
const Sorting = require("./models/QuestionsModels/DSA/Sorting");
const Stack = require("./models/QuestionsModels/DSA/Stack");
const General = require("./models/QuestionsModels/DSA/GeneralDSA");
const Striing = require("./models/QuestionsModels/DSA/String");

const DSA = require("./models/QuestionsModels/DSA");






dotenv.config();

const connectDB = async () => {
  try {
     await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully for seeding.');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

connectDB();



const migrations = async()=>{
  // migrate Array questions

await DSA.deleteMany({});  
const arrayQuestions = await Array.find();
for (let q of arrayQuestions) {
  await DSA.create({ question: q.questionText, category: "array" });
}

// migrate String questions
const stringQuestions = await Striing.find();
for (let q of stringQuestions) {
  await DSA.create({ question: q.questionText, category: "string" });
}


// migrate String questions
const stackQuestions = await Stack.find();
for (let q of stackQuestions) {
  await DSA.create({ question: q.questionText, category: "stack" });
}


// migrate String questions
const queueQuestions = await Queue.find();
for (let q of queueQuestions) {
  await DSA.create({ question: q.questionText, category: "queue" });
}

// migrate String questions
const sortingQuestions = await Sorting.find();
for (let q of sortingQuestions) {
  await DSA.create({ question: q.questionText, category: "sorting" });
}
// migrate String questions
const generalQuestions = await General.find();
for (let q of generalQuestions) {
  await DSA.create({ question: q.questionText, category: "generaldsa" });
}
// migrate String questions
const linkedlistQuestions = await LinkedList.find();
for (let q of linkedlistQuestions) {
  await DSA.create({ question: q.questionText, category: "linkedlist" });
}

console.log("Migration done");
process.exit();
}

migrations();