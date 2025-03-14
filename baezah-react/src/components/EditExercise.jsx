import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditExercise() {
    // Extract id from URL
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('kgs');
    const [date, setDate] = useState('');

    // Hook to fetch data
    useEffect(() => {
        fetch(`/exercises/${id}`)
            // Get data
            .then((response) => response.json())
            // Update form fields
            .then((data) => {
                setName(data.name);
                setReps(data.reps);
                setWeight(data.weight);
                setUnit(data.unit);
                setDate(data.date);
            })
            // Catch errors
            .catch((error) => {
                console.error('Error fetching exercise:', error);
                alert('Error fetching exercise');
                navigate('/');
            });
    }, [id, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/exercises/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name, reps: parseInt(reps), weight: parseInt(weight), unit, date }),
        })
            .then((response) => {
                if(response.status === 200) {
                    alert('Exercise update successfully!');
                    navigate('/');
                } else {
                    alert('Failed to update exercise.');
                    navigate('/')
                }
            })
            .catch((error) => {
                console.error('Error updating exercise:', error);
                alert('An error occurred.')
                navigate('/');
            });

    };

    return (
        <div>
            <h2>Edit Exercise</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="reps">reps:</label>
                    <input type="number" id="reps" value={reps} onChange={(e) => setReps(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="weight">Weight:</label>
                    <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="unit">Unit:</label>
                    <select id="unit" value={unit} onChange={(e) => setUnit(e.target.value)} required >
                        <option value="kgs">kgs</option>
                        <option value="lbs">lbs</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="date">Date (MM-DD-YY):</label>
                    <input type="text" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default EditExercise;