const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/register', authController.registerPatient);
router.post('/login', authController.loginPatient);

module.exports = router;
