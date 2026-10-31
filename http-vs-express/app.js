// Import Express
const express = require("express");

// Create an Express application
const app = express();

// Route 1: Home page
app.get("/", (req, res) => {
    res.status(200).send("Welcome to my website!");
});

// Route 2: About page
app.get("/about", (req, res) => {
    res.status(200).send("This is the About page.");
});

// Route 3: Students API
app.get("/api/students", (req, res) => {
    const students = [
        { id: 1, name: "Aarav" },
        { id: 2, name: "Priya" },
        { id: 3, name: "Rahul" }
    ];

    res.status(200).json(students);
});

// Route 4: Handle unknown routes
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Express server running at http://localhost:3000");
});
