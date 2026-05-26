const mongoose = require('mongoose');

const aiResultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  image: String,
  disease: String,
  confidence: Number,
  recommendation: String,
  features: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AIResult', aiResultSchema);
