// Import required modules
const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Environment variables
const storedPassword = process.env.PASSWORD || '1234';

// Define a route for password verification
app.post('/check-password', (req, res) => {
    const clientPassword = req.body.password;

    if (clientPassword === storedPassword) {
        // Password is correct, send a success response
        res.json({ authorized: true });
    } else {
        // Password is incorrect, send a failure response
        res.json({ authorized: false });
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
