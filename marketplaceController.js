const MarketItem = require('../models/marketItemModel');

exports.getItems = async (req, res) => {
  const items = await MarketItem.find();
  res.json(items);
};

exports.createItem = async (req, res) => {
  const item = await MarketItem.create(req.body);
  res.status(201).json(item);
};

exports.purchaseItem = async (req, res) => {
  const item = await MarketItem.findById(req.params.id);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  if (item.quantity <= 0) return res.status(400).json({ error: 'Out of stock' });
  item.quantity -= 1;
  await item.save();
  res.json({ success: true, item });
};
