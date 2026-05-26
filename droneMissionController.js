const DroneMission = require('../models/droneMissionModel');

exports.getAllMissions = async (req, res) => {
  try {
    let missions = await DroneMission.find().sort({ createdAt: -1 });
    if (!missions.length) {
      missions = await DroneMission.insertMany([
        { title: 'Field perimeter survey', status: 'scheduled', routeDescription: 'North field grid path with crop health imaging.' },
        { title: 'NDVI scan mission', status: 'in progress', routeDescription: 'Multi-sector scan with thermal and RGB capture.' }
      ]);
    }
    res.json(missions);
  } catch (error) {
    res.status(500).json({ error: 'Unable to load drone missions' });
  }
};
