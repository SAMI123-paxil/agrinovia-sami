const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  size: String,
  cropType: String,
  plantingDate: Date,
  harvestDate: Date,
  location: String,
  zones: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Farm', farmSchema);
