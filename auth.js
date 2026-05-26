const express = require('express');
const router = express.Router();
const { login, register, verifyOtp, requestPasswordReset } = require('../controllers/authController');

router.post('/login', login);
router.post('/register', register);
router.post('/verify-otp', verifyOtp);
router.post('/forgot-password', requestPasswordReset);

module.exports = router;
