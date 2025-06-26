const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const day2Routes = require('./Routes/Day2Routes');

// Load env vars
dotenv.config();

// Connect to MongoDB
connectDB();

// Init express
const app = express();
app.use(express.json());

// Routes
app.use('/api', day2Routes);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
