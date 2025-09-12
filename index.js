const express = require('express');
const app = express();
const helmet = require('helmet');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db/db');
const cookieParser = require('cookie-parser');
dotenv.config();
const PORT = 4000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(helmet());
app.use(cookieParser());
connectDB();
// This is all About cross origin connection
app.use(cors({
  origin: "http://localhost:5173", // your React app URL
  methods: ["GET", "POST", "PUT", "DELETE"], // allowed methods
  credentials: true // if using cookies
}));
const authRoutes = require('./routes/auth.routes');
const profileRoute = require('./routes/userProfile.routes');
const practiceRoutes = require('./routes/practice.routes');
const attemptRoutes = require('./routes/fetchAttempt.routes');







//User Auth Routes
app.use("/api/auth",authRoutes);

//fetching user from db
app.use("/api",profileRoute);

//fetching practice question random route

app.use('/api/practice',practiceRoutes);



//route for fetching attempts recents
app.use("/api/attempts",attemptRoutes);










app.listen(PORT,()=>{
  console.log("Your App IS listening on ",PORT);
})

