// Import the dotenv package (no need to load .env file)
require('dotenv').config();

const express = require('express');
const app = express();

// Your server-side code here

// Access the PASSWORD environment variable
const password = process.env.PASSWORD;

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
