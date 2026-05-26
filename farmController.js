const Farm = require('../models/farmModel');

exports.getFarms = async (req, res) => {
  const farms = await Farm.find();
  res.json(farms);
};

exports.createFarm = async (req, res) => {
  const farm = await Farm.create(req.body);
  res.status(201).json(farm);
};

exports.getFarmById = async (req, res) => {
  const farm = await Farm.findById(req.params.id);
  if (!farm) return res.status(404).json({ error: 'Farm not found' });
  res.json(farm);
};
