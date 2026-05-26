const express = require('express');
const router = express.Router();
const { getItems, createItem, purchaseItem } = require('../controllers/marketplaceController');

router.get('/', getItems);
router.post('/', createItem);
router.post('/:id/purchase', purchaseItem);

module.exports = router;
