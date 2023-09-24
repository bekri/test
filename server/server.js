const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// JWT secret key (keep this secret!)
const secretKey = 'MySuperSecretKey$1234&';

// Simulated user data (for demonstration purposes)
const userData = {
  userId: 1,
};

// Authentication endpoint
app.post('/login', (req, res) => {
  const { password } = req.body;

  // Replace this with your actual password validation logic
  if (password === '1234') {
    // Generate a JWT
    const token = jwt.sign(userData, secretKey);

    // Return the JWT to the client
    res.json({ token });
  } else {
    // Password is incorrect
    res.status(401).json({ error: 'Incorrect password' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
