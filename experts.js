const express = require('express');
const router = express.Router();
const { getExperts, requestConsultation } = require('../controllers/expertController');

router.get('/', getExperts);
router.post('/consult', requestConsultation);

module.exports = router;
