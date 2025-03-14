import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

function ExerciseRow({ exercise, onDelete }) {

    // Router Hook to avoid reloading page
    const navigate = useNavigate

    // Navigate user to edit excercise
    // Will be used with button
    const handleEdit = () => {
        navigate('/edit/${excercise._id}');
    };

    return (
        <tr>
            <td> {exercise.name}</td>
            <td> {exercise.reps}</td>
            <td> {exercise.weight}</td>
            <td> {exercise.unit}</td>
            <td> {exercise.date}</td>
            <td>
                <button onClick={handleEdit} aria-label="Edit">
                    <FaEdit />
                </button>
                <button onClick={() => onDelete(exercise._id)} aria-label="Delete">
                    <FaTrash />
                </button>
            </td>
        </tr>
    );
}

export default ExerciseRow;