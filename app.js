const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const { connect } = require('./database/connection');
const pumpRoutes = require('./routes/pumps');
const sensorRoutes = require('./routes/sensors');
const dashboardRoutes = require('./routes/dashboard');
const authRoutes = require('./routes/auth');
const farmRoutes = require('./routes/farms');
const marketplaceRoutes = require('./routes/marketplace');
const expertRoutes = require('./routes/experts');
const cooperativeRoutes = require('./routes/cooperatives');
const reportRoutes = require('./routes/reports');
const notificationRoutes = require('./routes/notifications');
const plantVillageRoutes = require('./routes/plantVillage');
const weatherRoutes = require('./routes/weather');
const droneMissionsRoutes = require('./routes/droneMissions');
const adminRoutes = require('./routes/admin');
const aiRoutes = require('./routes/ai');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

connect();
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

app.use('/api/auth', authRoutes);
app.use('/api/pumps', pumpRoutes);
app.use('/api/sensors', sensorRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/farms', farmRoutes);
app.use('/api/marketplace', marketplaceRoutes);
app.use('/api/experts', expertRoutes);
app.use('/api/cooperatives', cooperativeRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/plantvillage', plantVillageRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/api/drone-missions', droneMissionsRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/ai', aiRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Agrinovia backend running on http://localhost:${PORT}`);
});
