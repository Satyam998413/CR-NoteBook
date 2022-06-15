var jwt = require('jsonwebtoken');

const JWT_SECRET = "SATYAM$BARANWAL";

const fetchuser = (req, res, next) => {
    // Get user from jwt token and id to object

    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please Authenticate a valid user" })
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;

        next();
    } catch (error) {
        console.error(error.message);
        res.status(401).send({ error: "Please Authenticate a valid user" })

    }

}

module.exports = fetchuser;