// scripts/password.js (server-side script)

const { VercelSecrets } = require('@vercel/secrets');

module.exports = async (req, res) => {
    // Your function code here
    const secrets = new VercelSecrets();
    const { PASSWORD } = await secrets.extract();

    try {
        const body = JSON.parse(req.body);
        const enteredPassword = body.password;

        if (enteredPassword === PASSWORD) {
            res.json({ accessGranted: true });
        } else {
            res.json({ accessGranted: false });
        }
    } catch (error) {
        console.error('Error checking password:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
