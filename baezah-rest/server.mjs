import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load .env file
dotenv.config()

// Initialize Express: get PORT and connectionstring
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_CONNECT_STRING = 
