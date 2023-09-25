module.exports = (req, res) => {
    const { password } = req.body;
    const correctPassword = module.exports.correctPassword;
    if (password === correctPassword) {
        res.status(200).json({ isAuthenticated: true });
    } else {
        res.status(401).json({ isAuthenticated: false });
    }
};

module.exports.correctPassword = '1234'; // Export the correct password as well