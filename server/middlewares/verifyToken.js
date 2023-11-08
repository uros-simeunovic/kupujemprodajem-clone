const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.cookies['AUTH-TOKEN'] || req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json('Unauthorized');
    }

    jwt.verify(token, 'your-secret-key', (err, user) => {
        if (err) {
        return res.status(403).json('Forbidden');
        }
        req.user = user;
        next();
    });
}