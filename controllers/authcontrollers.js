const bcrypt = require('bcrypt');
const pool = require('../config/db');

exports.registerPatient = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const [rows] = await pool.query(
            'INSERT INTO Patients (first_name, last_name, email, password_hash) VALUES (?, ?, ?, ?)',
            [first_name, last_name, email, hashedPassword]
        );
        res.status(201).json({ message: 'Patient registered successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register patient.' });
    }
};

exports.loginPatient = async (req, res) => {
    const { email, password } = req.body;
    try {
        const [rows] = await pool.query('SELECT * FROM Patients WHERE email = ?', [email]);
        if (rows.length && await bcrypt.compare(password, rows[0].password_hash)) {
            req.session.userId = rows[0].id;
            res.json({ message: 'Login successful!' });
        } else {
            res.status(401).json({ message: 'Invalid credentials.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Login failed.' });
    }
};
