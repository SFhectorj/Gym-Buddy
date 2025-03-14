import express from 'express'
import { createExercise } from '../controllers/exerciseController.mjs';
import { getExerciseById } from '../controllers/exerciseController.mjs';
import { getExercises } from '../controllers/exerciseController.mjs';
import { updateExercise } from '../controllers/exerciseController.mjs';
import { deleteExercise } from '../controllers/exerciseController.mjs';

const router = express.Router();

router.route('/').post(createExercise).get(getExercises);
router
    .route('/:_id')
    .get(getExerciseById)
    .put(updateExercise)
    .delete(deleteExercise);

export default router;

