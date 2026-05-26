const express = require('express');
const router = express.Router();
const { getPumps, controlPump, getSchedule } = require('../controllers/pumpController');

router.get('/', getPumps);
router.post('/:id/action', controlPump);
router.get('/schedule', getSchedule);

module.exports = router;
