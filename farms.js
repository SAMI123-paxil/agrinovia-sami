const express = require('express');
const router = express.Router();
const { getFarms, createFarm, getFarmById } = require('../controllers/farmController');

router.get('/', getFarms);
router.post('/', createFarm);
router.get('/:id', getFarmById);

module.exports = router;
