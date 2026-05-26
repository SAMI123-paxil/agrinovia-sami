const experts = [
  { id: 'expert-1', name: 'Dr. Amina', specialty: 'Crop disease' },
  { id: 'expert-2', name: 'Mr. Bekele', specialty: 'Irrigation' }
];

exports.getExperts = async (req, res) => {
  res.json(experts);
};

exports.requestConsultation = async (req, res) => {
  const { farmerId, expertId, topic } = req.body;
  if (!farmerId || !expertId || !topic) {
    return res.status(400).json({ error: 'Missing consultation data' });
  }
  res.json({ success: true, message: 'Consultation request submitted', request: { farmerId, expertId, topic } });
};
