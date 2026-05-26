const express = require('express');
const router = express.Router();
const {
  getAllEntries,
  searchEntries,
  addEntry,
  seedSampleEntries
} = require('../controllers/plantVillageController');

router.get('/entries', getAllEntries);
router.get('/search', searchEntries);
router.post('/entries', addEntry);
router.post('/seed', seedSampleEntries);

module.exports = router;
