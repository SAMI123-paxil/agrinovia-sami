const express = require('express');
const router = express.Router();
const { getCooperatives, getCooperativeById, createCooperative } = require('../controllers/cooperativeController');

router.get('/', getCooperatives);
router.get('/:id', getCooperativeById);
router.post('/', createCooperative);

module.exports = router;
