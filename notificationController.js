const notifications = [
  { id: 'note-1', type: 'disease', message: 'Late blight detected in South Field.', read: false },
  { id: 'note-2', type: 'water', message: 'Low moisture detected in North Field.', read: false },
  { id: 'note-3', type: 'drone', message: 'Drone battery low: 18%.', read: false }
];

exports.getNotifications = (req, res) => {
  res.json(notifications);
};

exports.acknowledgeNotification = (req, res) => {
  const notification = notifications.find(item => item.id === req.params.id);
  if (!notification) return res.status(404).json({ error: 'Notification not found' });
  notification.read = true;
  res.json({ success: true, notification });
};
