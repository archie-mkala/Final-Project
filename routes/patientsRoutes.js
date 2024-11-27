const express = require('express');
const patientController = require('../controllers/patientController');
const router = express.Router();

router.get('/profile', patientController.getPatientProfile);
router.put('/profile', patientController.updatePatientProfile);

module.exports = router;
