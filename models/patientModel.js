const pool = require('../config/db');

const Patient = {
    async createPatient(data) {
        const { first_name, last_name, email, password_hash, phone, date_of_birth, gender, address } = data;
        const [result] = await pool.query(
            'INSERT INTO Patients (first_name, last_name, email, password_hash, phone, date_of_birth, gender, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [first_name, last_name, email, password_hash, phone, date_of_birth, gender, address]
        );
        return result;
    },

    async findPatientByEmail(email) {
        const [rows] = await pool.query('SELECT * FROM Patients WHERE email = ?', [email]);
        return rows[0];
    }
};

module.exports = Patient;
