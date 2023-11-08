const db = require('../db');
const queries = require('../helper/queries');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {
    // POST /api/users/register
    static register(req, res) {
        const { first_name, last_name, email, password } = req.body;
        const saltRounds = 10;
        db.query(queries.checkIfUserExists, [email], (err, result) => {
            if (result.rows.length) return res.json("Email already exists.");

            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(password, salt);

            db.query(queries.registerUser, [first_name, last_name, email, hash], (err, result) => {
                if (err) return res.status(400).json(err);
                res.status(200).json("User registered.");
            });
        });
    }
    // POST /api/users/login
    static login(req, res) {
        const { email, password } = req.body;

        db.query(queries.checkIfUserExists, [email], (err, result) => {
            if (!result.rows.length) return res.json("User doesn't exist.");

            const passwordCorrect = bcrypt.compareSync(password, result.rows[0].password);

            if (!passwordCorrect) return res.status(403).json("Wrong password");

            const user = result.rows[0];
            const token = jwt.sign({userid: user.userid, email: user.email}, 'k43nb6kl3j4b6l2k4', {expiresIn: '1h',});
            
            console.log(token);

            res.cookie("AUTH-TOKEN", token, {domain: 'localhost', path: '/'});
            res.json({token});
        });
    }
}

module.exports = UserController;