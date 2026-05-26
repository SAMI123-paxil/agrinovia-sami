const express = require('express');
const router = express.Router();
const { getDashboardSummary, getAlerts } = require('../controllers/dashboardController');

router.get('/summary', getDashboardSummary);
router.get('/alerts', getAlerts);

module.exports = router;
