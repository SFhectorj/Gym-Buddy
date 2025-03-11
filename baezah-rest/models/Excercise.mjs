import mongoose from "mongoose";

// Stores the data for the app
const exerciseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true, min: 1 },
    weight: { type: Number, required: true, min: 1 },
    unit: { type: String, required: true, enum: ['kgs', 'lbs'] },
    date: { type: String, required: true }
});

const Exercise = mongoose.model('Excercise', exerciseSchema);

export default Exercise