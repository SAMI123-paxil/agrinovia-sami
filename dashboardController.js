exports.getDashboardSummary = (req, res) => {
  res.json({
    weather: { temperature: '26°C', condition: 'Partly sunny', wind: '12 km/h', humidity: '70%' },
    cropHealth: 87,
    activePumps: 2,
    alerts: 3,
    nextAction: 'Inspect Sector 4 for nutrient stress'
  });
};

exports.getAlerts = (req, res) => {
  res.json([
    { type: 'disease', message: 'Early leaf rust detected in Sector 4.' },
    { type: 'water', message: 'Moisture below threshold in North Field.' },
    { type: 'drone', message: 'Drone battery low: 18% remaining.' }
  ]);
};
