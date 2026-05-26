const PlantVillageEntry = require('../models/plantVillageModel');

exports.getAllEntries = async (req, res) => {
  try {
    const entries = await PlantVillageEntry.find().sort({ crop: 1, disease: 1 });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch PlantVillage entries' });
  }
};

exports.searchEntries = async (req, res) => {
  try {
    const { crop, disease, symptom } = req.query;
    const filter = {};
    if (crop) filter.crop = new RegExp(crop, 'i');
    if (disease) filter.disease = new RegExp(disease, 'i');
    if (symptom) filter.symptoms = new RegExp(symptom, 'i');

    const entries = await PlantVillageEntry.find(filter).limit(100);
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Unable to search PlantVillage entries' });
  }
};

exports.addEntry = async (req, res) => {
  try {
    const entry = new PlantVillageEntry(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create PlantVillage entry', details: error.message });
  }
};

exports.seedSampleEntries = async (req, res) => {
  try {
    const sampleEntries = [
      {
        crop: 'Tomato',
        disease: 'Late blight',
        symptoms: ['Dark lesions', 'Leaf yellowing', 'Fruit rot'],
        affectedParts: ['Leaves', 'Stems', 'Fruits'],
        severity: 'High',
        treatment: ['Remove infected foliage', 'Improve air circulation', 'Apply copper fungicide'],
        description: 'Late blight is a fungal disease that causes rapid crop loss in tomatoes.'
      },
      {
        crop: 'Potato',
        disease: 'Early blight',
        symptoms: ['Target-like spots', 'Leaf drop', 'Stem lesions'],
        affectedParts: ['Leaves', 'Stems'],
        severity: 'Moderate',
        treatment: ['Rotate crops', 'Use resistant varieties', 'Apply fungicide'],
        description: 'Early blight affects potatoes and can reduce yield if not managed early.'
      }
    ];

    await PlantVillageEntry.deleteMany({});
    const created = await PlantVillageEntry.insertMany(sampleEntries);
    res.json({ seeded: created.length, entries: created });
  } catch (error) {
    res.status(500).json({ error: 'Unable to seed PlantVillage data' });
  }
};
