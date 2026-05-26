const express = require('express');
const router = express.Router();
const { analyzeImage, calculateNDVI } = require('../controllers/aiController');

router.post('/analyze-image', analyzeImage);
router.post('/ndvi', calculateNDVI);

module.exports = router;
