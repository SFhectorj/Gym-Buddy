import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Routes from './routes/exercises.mjs'

// Load .env file
dotenv.config();

// Initialize Express: get PORT and connectionstring
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_CONNECT_STRING = process.env.MONGODB_CONNECT_STRING;

app.use(cors());
// Parse JSON requests
app.use(express.json());

mongoose.connect(MONGODB_CONNECT_STRING, {
    useNewURLParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

// Check for errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Show success message
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use('/excercises', Routes);

// Start express server
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});



