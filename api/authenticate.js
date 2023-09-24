// In a file named `authenticate.js` within an `api` directory
module.exports = async (req, res) => {
    const { password } = req.body;

    // Replace 'your_actual_password' with your actual password
    const correctPassword = '1234';

    if (password === correctPassword) {
        res.status(200).json({ isAuthenticated: true });
    } else {
        res.status(401).json({ isAuthenticated: false });
    }
};
