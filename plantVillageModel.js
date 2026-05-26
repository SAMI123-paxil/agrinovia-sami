const mongoose = require('mongoose');

const plantVillageSchema = new mongoose.Schema({
  crop: { type: String, required: true },
  disease: { type: String, required: true },
  symptoms: [String],
  affectedParts: [String],
  severity: { type: String, default: 'Moderate' },
  treatment: [String],
  description: String,
  source: { type: String, default: 'PlantVillage' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PlantVillageEntry', plantVillageSchema);
