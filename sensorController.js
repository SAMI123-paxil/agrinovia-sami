const sensors = [
  { id: 'sensor-1', type: 'Soil Moisture', location: 'North Field', value: '65%', status: 'active' },
  { id: 'sensor-2', type: 'Temperature', location: 'North Field', value: '38°C', status: 'high' },
  { id: 'sensor-3', type: 'Humidity', location: 'South Field', value: '72%', status: 'active' },
  { id: 'sensor-4', type: 'Soil Nutrients', location: 'East Field', value: '42 mg/kg', status: 'active' },
  { id: 'sensor-5', type: 'Water Quality', location: 'Irrigation Tank', value: 'pH 6.8', status: 'active' }
];

exports.getSensors = (req, res) => {
  res.json(sensors);
};

exports.updateSensorSettings = (req, res) => {
  const { id } = req.params;
  const { threshold } = req.body;
  const sensor = sensors.find(item => item.id === id);

  if (!sensor) {
    return res.status(404).json({ error: 'Sensor not found' });
  }

  sensor.threshold = threshold || sensor.threshold || null;
  res.json({ success: true, sensor });
};

exports.getSensorSummary = (req, res) => {
  res.json({ total: sensors.length, active: sensors.filter(s => s.status === 'active').length, averageBattery: '92%' });
};
