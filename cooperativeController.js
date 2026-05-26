const cooperatives = [
  { id: 'coop-1', name: 'Addis Cooperative', farms: 8, members: 56 },
  { id: 'coop-2', name: 'Blue Nile Union', farms: 12, members: 92 }
];

exports.getCooperatives = (req, res) => {
  res.json(cooperatives);
};

exports.getCooperativeById = (req, res) => {
  const cooperative = cooperatives.find(item => item.id === req.params.id);
  if (!cooperative) return res.status(404).json({ error: 'Cooperative not found' });
  res.json(cooperative);
};

exports.createCooperative = (req, res) => {
  const cooperative = {
    id: `coop-${cooperatives.length + 1}`,
    ...req.body
  };
  cooperatives.push(cooperative);
  res.status(201).json(cooperative);
};
