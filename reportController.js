const reports = [
  { id: 'report-1', type: 'Yield', message: 'Projected yield +12% for maize fields.' },
  { id: 'report-2', type: 'Disease', message: 'Leaf rust detected in South Field.' }
];

exports.getReports = (req, res) => {
  res.json(reports);
};

exports.createReport = (req, res) => {
  const report = { id: `report-${reports.length + 1}`, ...req.body };
  reports.push(report);
  res.status(201).json(report);
};
