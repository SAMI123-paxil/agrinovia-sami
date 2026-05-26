const express = require('express');
const router = express.Router();
const { getSensors, updateSensorSettings, getSensorSummary } = require('../controllers/sensorController');

router.get('/', getSensors);
router.post('/:id/settings', updateSensorSettings);
router.get('/summary', getSensorSummary);

module.exports = router;
