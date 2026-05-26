const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  phone: String,
  password: String,
  role: { type: String, enum: ['Farmer', 'Cooperative', 'Expert', 'Admin', 'Drone Operator'], default: 'Farmer' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
