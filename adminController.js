const User = require('../models/userModel');
const Farm = require('../models/farmModel');
const DroneMission = require('../models/droneMissionModel');
const AIResult = require('../models/aiResultModel');

exports.getSummary = async (req, res) => {
  try {
    const [users, farms, droneMissions, aiResults] = await Promise.all([
      User.countDocuments(),
      Farm.countDocuments(),
      DroneMission.countDocuments(),
      AIResult.countDocuments()
    ]);
    res.json({ users, farms, droneMissions, aiResults });
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch admin summary' });
  }
};
