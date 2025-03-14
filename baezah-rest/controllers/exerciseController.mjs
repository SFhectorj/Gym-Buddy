import Exercise from '../models/Excercise.mjs';
import asyncHandler from 'express-async-handler';

/**
*
* @param {string} date
* Return true if the date format is MM-DD-YY where MM, DD and YY are 2 digit integers
*/
function isDateValid(date) {
    // Test using a regular expression. 
    // To learn about regular expressions see Chapter 6 of the text book
    const format = /^\d\d-\d\d-\d\d$/;
    return format.test(date);
}

const createExcercise = asyncHandler(async(req, res) => {
    const { name, reps, weight, unit, date } = req.body;

    if (
        !name || 
        !reps || 
        !weight || 
        !unit || 
        !date || 
        typeof name !== 'string' || 
        typeof reps !== 'number' || 
        typeof weight !== 'number' || 
        typeof unit !== 'string' || 
        typeof date !== 'string' || 
        name.trim().length === 0 || 
        reps <= 0 || 
        weight <= 0 || 
        !['kgs', 'lbs'].includes(unit) || 
        !isDateValid(date)
      ) {
        res.status(400).json({ Error: 'Invalid request' });
        return;
      }

      const exercise = await Exercise.create({ name, reps, weight, unit, date });
      res.status(201).json(exercise);
});

const getExercises = asyncHandler(async (req, res) => {
    const exercises = await createExcercise.find({});
    res.status(200).json(exercises);
});

const getExerciseById = asyncHandler(async (req, res) => {
    const exercise = await Exercise.findById(req.params._id);
    if (exercise) {
        res.status(200).json(exercise);
    } else {
        res.status(404).json({ Error: 'Not found' });
    }
});

const updateExercise = asyncHandler(async (req, res) => {
    const { name, reps, weight, unit, date } = req.body;
    if (
        !name || 
        !reps || 
        !weight || 
        !unit || 
        !date || 
        typeof name !== 'string' || 
        typeof reps !== 'number' || 
        typeof weight !== 'number' || 
        typeof unit !== 'string' || 
        typeof date !== 'string' || 
        name.trim().length === 0 || 
        reps <= 0 || 
        weight <= 0 || 
        !['kgs', 'lbs'].includes(unit) || 
        !isDateValid(date)
      ) {
        res.status(400).json({ Error: 'Invalid request' });
        return;
      }
      const exercise = await Exercise.findByIdAndUpdate(req.params._id, req.body, {
        new:true,
      });
      if (exercise) {
        res.status(200).json(exercise);
      } else {
        res.status(404).json({ Error: 'Not found' });
      }
});

const deleteExercise = asyncHandler(async (req, res) => {
    const exercise = await Exercise.findByIdAndDelete(req.params._id);
    if (exercise) {
        res.status(204).send();
    } else {
        res.status(404).json({ Error: 'Not found'});
    }
});

export { createExcercise, getExerciseById, getExercises, updateExercise,deleteExercise };