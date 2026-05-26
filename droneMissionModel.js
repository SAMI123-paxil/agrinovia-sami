const mongoose = require('mongoose');

const droneMissionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, default: 'scheduled' },
  routeDescription: String,
  startTime: Date,
  endTime: Date,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DroneMission', droneMissionSchema);
