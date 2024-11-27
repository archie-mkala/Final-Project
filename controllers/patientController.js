const pool = require('../config/db');

exports.getPatientProfile = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Patients WHERE id = ?', [req.session.userId]);
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve profile.' });
    }
};

exports.updatePatientProfile = async (req, res) => {
    const { first_name, last_name, phone, date_of_birth, gender, address } = req.body;
    try {
        await pool.query(
            'UPDATE Patients SET first_name = ?, last_name = ?, phone = ?, date_of_birth = ?, gender = ?, address = ? WHERE id = ?',
            [first_name, last_name, phone, date_of_birth, gender, address, req.session.userId]
        );
        res.json({ message: 'Profile updated successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update profile.' });
    }
};
