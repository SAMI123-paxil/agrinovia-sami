const mongoose = require('mongoose');

const pumpSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, default: 'offline' },
  flowRate: Number,
  pressure: Number,
  battery: Number,
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pump', pumpSchema);
