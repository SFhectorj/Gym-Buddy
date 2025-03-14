import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function CreateExercise() {
    // useState hook
    const [name, setName] = useState(' ');
    const [reps, setReps] = useState(' ');
    const [weight, setWeight] = useState(' ');
    const [unit, setUnit] = useState('kgs');
    const [date, setDate] = useState(' ');
    // Navigation hook to move without reloading
    const navigate = useNavigate();

    // add a new excercise to the database
    const handleSubmit = (e) => {
        //stop reloading after form submission
        e.preventDefault();
        // send POST request
        fetch('/exercises', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, reps: parseInt(reps), weight: parseInt(weight), unit, date }),
        })
        // Response codes
        .then((response) => {
            if (response.status === 201) {
                alert('Exercise created');
                navigate('/');
            } else {
                alert('Failed to create exercise!');
                //redirect to home page
                navigate('/');
            }
        })
        .catch((error) => {
            console.error('Error creating exercise:', error);
            alert('An error occured.');
            navigate('/');
        });
    };





}