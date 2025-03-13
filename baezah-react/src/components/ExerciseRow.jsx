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
}