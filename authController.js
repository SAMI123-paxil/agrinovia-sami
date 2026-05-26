const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || password !== user.password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'agrinovia-secret', { expiresIn: '12h' });
  res.json({ token, user: { name: user.name, email: user.email, role: user.role } });
};

exports.register = async (req, res) => {
  const { name, email, phone, password, role } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ error: 'Email already registered' });
  const user = await User.create({ name, email, phone, password, role });
  res.status(201).json({ user });
};

exports.verifyOtp = async (req, res) => {
  res.json({ success: true, message: 'OTP verified' });
};

exports.requestPasswordReset = async (req, res) => {
  res.json({ success: true, message: 'Password reset requested' });
};
