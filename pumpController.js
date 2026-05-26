const pumps = [
  { id: 'pump-1', name: 'North Field Pump', status: 'running', flowRate: 61, pressure: 2.8, battery: 82 },
  { id: 'pump-2', name: 'South Field Pump', status: 'running', flowRate: 45, pressure: 2.5, battery: 78 },
  { id: 'pump-3', name: 'East Field Pump', status: 'offline', flowRate: 0, pressure: 0.0, battery: 0 }
];

exports.getPumps = (req, res) => {
  res.json(pumps);
};

exports.controlPump = (req, res) => {
  const { id } = req.params;
  const { action } = req.body;
  const pump = pumps.find(item => item.id === id);

  if (!pump) {
    return res.status(404).json({ error: 'Pump not found' });
  }

  if (!action || !['start', 'stop', 'pause'].includes(action)) {
    return res.status(400).json({ error: 'Invalid pump action' });
  }

  pump.status = action === 'start' ? 'running' : action === 'stop' ? 'offline' : 'paused';
  return res.json({ success: true, pump });
};

exports.getSchedule = (req, res) => {
  res.json([
    { time: '05:00 AM - 07:00 AM', pump: 'North Field Pump', status: 'completed' },
    { time: '08:00 AM - 10:30 AM', pump: 'South Field Pump', status: 'running' },
    { time: '02:00 PM - 04:00 PM', pump: 'East Field Pump', status: 'scheduled' }
  ]);
};
