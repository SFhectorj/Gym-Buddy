import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExerciseTable from './components/ExerciseTable';
import CreateExercise from './components/CreateExercise';
import EditExercise from './components/EditExercise';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <h1>Excercise Tracker</h1>
        <p>Track your exercises</p>
      </header>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<ExerciseTable />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/edit/:id" element={<EditExercise />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()}Hector Baeza</p>
      </footer>
    </Router>
  );
}

export default App
