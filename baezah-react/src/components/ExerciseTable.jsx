import React, { useState, useEffect} from 'react';

import { Link } from 'react-router-dom';

function ExerciseTable() {
    const [exercises, setExercises] = useState([]);

    // React hook to fetch exercise data
    //only runs once
    useEffect(() => {
        fetch('/exercises')

        //convert HTTP response and data to Json for parsing
        .then((response) => response.json())
        .then((data) => setExercises(data))
        .catch((error) => console.error('Error fetching exercises:', error));
    }, []);
}

// Manage a delete request
const handleDelete = (id) => {
    // Send delete request to backend
    fetch('/exercises/${id}', { method: 'DELETE'})

    .then((response) => {
        if (response.status === 204) {
            // Filters out the deleted exercise from the current state ad updates it to delete it
            setExercises(exercises.filter((exercise) => exercise._id !== id))
        } else {
            console.error('Could not delete exercise');
        }
    })
    // any other error occurs
    .catch((error) => console.error('Error deleting exercise:', error));
};