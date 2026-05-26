const mongoose = require('mongoose');

const marketItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  price: Number,
  quantity: Number,
  description: String,
  type: { type: String, enum: ['Seed', 'Fertilizer', 'Tool', 'Service', 'Rental'], default: 'Tool' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MarketItem', marketItemSchema);
