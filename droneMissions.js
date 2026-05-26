const express = require('express');
const router = express.Router();
const { getAllMissions } = require('../controllers/droneMissionController');

router.get('/', getAllMissions);

module.exports = router;
