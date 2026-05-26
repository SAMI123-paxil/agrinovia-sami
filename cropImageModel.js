const mongoose = require('mongoose');

const cropImageSchema = new mongoose.Schema({
  farm: { type: mongoose.Schema.Types.ObjectId, ref: 'Farm' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  imageUrl: String,
  analysisDate: { type: Date, default: Date.now },
  notes: String
});

module.exports = mongoose.model('CropImage', cropImageSchema);
