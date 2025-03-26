# Gym Buddy - Exercise Tracker Application (MERN Stack)

This application is a Single Page Application (SPA) built using the MERN stack (MongoDB, Express, React, Node.js) to track exercises completed by a user. It allows users to create, read, update, and delete exercise records.

## Features

* **Create Exercise:** Users can add new exercise records with details such as name, reps, weight, unit, and date.
* **Read Exercises:** Displays a list of all exercises stored in the database.
* **Update Exercise:** Users can edit existing exercise records.
* **Delete Exercise:** Users can remove exercise records.
* **Responsive UI:** User-friendly interface built with React.
* **REST API:** Backend API built with Node.js and Express for data management.
* **MongoDB Persistence:** Data is stored in a MongoDB database.

## Technologies Used

* **Frontend:**
    * React (with Vite)
    * React Router DOM
    * React Icons
    * CSS
* **Backend:**
    * Node.js
    * Express.js
    * MongoDB
    * Mongoose
    * dotenv
* **Development Tools:**
    * npm

## Setup Instructions

1.  **Clone the Repository:**

    ```bash
    git clone <repository_url>
    cd <repository_folder>
    ```

2.  **Backend Setup:**

    * Navigate to the backend directory.
    * Create a `.env` file in the backend directory with the following variables:

        ```
        PORT=3000
        MONGODB_CONNECT_STRING=<your_mongodb_connection_string>
        ```

    * Install dependencies:

        ```bash
        cd backend
        npm install
        ```

    * Run the backend server:

        ```bash
        node --experimental-modules server.mjs
        ```

3.  **Frontend Setup:**

    * Navigate to the frontend directory.
    * Install dependencies:

        ```bash
        cd frontend
        npm install
        ```

    * Start the development server:

        ```bash
        npm run dev
        ```

    * The React app will be available at `http://localhost:5173`.

## REST API Endpoints

* **POST /exercises:** Create a new exercise.
    * Request body: JSON object with exercise details.
    * Response: JSON object with the created exercise or an error message.
* **GET /exercises:** Retrieve all exercises.
    * Response: JSON array of exercises.
* **GET /exercises/:_id:** Retrieve a specific exercise by ID.
    * Response: JSON object of the exercise or an error message.
* **PUT /exercises/:_id:** Update an exercise by ID.
    * Request body: JSON object with updated exercise details.
    * Response: JSON object of the updated exercise or an error message.
* **DELETE /exercises/:_id:** Delete an exercise by ID.
    * Response: 204 No Content or an error message.

## Considerations

* The backend API uses ES modules and requires node versions that support .mjs files.
* The frontend is created using Vite, and the proxy is configured in `vite.config.js`.
* The application uses the `react-router-dom` to handle the app navigation.
* The application uses the `react-icons` library for icons.
* The application uses a .env file to store the port and database connection string.
* The application uses async/await for asynchronous programming.
* The exercise data is stored in the MongoDB database, and the application uses mongoose.
* The React components are function-based.
* The CSS is located in App.css and includes rules for global styling, table, and forms.
* The application includes semantic layout tags such as \<header\>, \<nav\>, and \<footer>.

## Learning Outcomes

This project demonstrates the following learning outcomes:

* Lifecycle of a React component.
* useEffect and useNavigate React hooks.
* Cross-origin requests from a React app to a REST API.
* Fetch API.
* Lifting up state in React apps.
* CRUD operations using a MERN stack.
* Building a REST API with Node.js and Express.
* Data persistence with MongoDB.
* Using ES modules and async/await in Node.js.
* Creating a React UI with Vite.
