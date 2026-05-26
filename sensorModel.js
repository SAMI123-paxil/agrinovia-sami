const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
  type: { type: String, required: true },
  location: String,
  value: String,
  status: String,
  threshold: String,
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sensor', sensorSchema);
