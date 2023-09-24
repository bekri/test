// api/password.js (server-side script)

const { VercelSecrets } = require('@vercel/secrets');

module.exports = async (req, res) => {
    const secrets = new VercelSecrets();
    const { PASSWORD } = await secrets.extract();

    try {
        const body = JSON.parse(req.body);
        const enteredPassword = body.password;

        if (enteredPassword === PASSWORD) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json({ accessGranted: true });
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json({ accessGranted: false });
        }
    } catch (error) {
        console.error('Error checking password:', error);
        res.setHeader('Content-Type', 'application/json');
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
