const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const pool = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();
app.use(express.json());

app.use(session({
    secret: '358645',
    resave: false,
    saveUninitialized: true,
}));

app.use('/auth', authRoutes);
app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/appointments', appointmentRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

