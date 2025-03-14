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

    return (
        <div>
            <h2>Create Excercise</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="reps">Reps:</label>
                    <input type="number" id="reps" value={reps} onChange={(e) => setReps(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="weight">Weight:</label>
                    <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="unit">Unit:</label>
                    <select id="unit" value={unit} onChange={(e) => setUnit(e.target.value)} required>
                        <option value="kgs">kgs</option>
                        <option value="lbs">lbs</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="date">Date (MM-DD-YY):</label>
                    <input type="text" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>

                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateExercise;