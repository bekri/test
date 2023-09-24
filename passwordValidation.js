// passwordValidation.js

const STORED_PASSWORD = process.env.PASSWORD; // Get the stored password from environment variables

module.exports = (req, res) => {
    const { passwordInput } = req.body; // Get the password input from the client

    if (passwordInput === STORED_PASSWORD) {
        // Password is correct
        res.status(200).json({ message: 'Password is correct' });
    } else {
        // Incorrect password
        res.status(401).json({ message: 'Incorrect password' });
    }
};
