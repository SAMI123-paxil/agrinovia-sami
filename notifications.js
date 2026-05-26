const express = require('express');
const router = express.Router();
const { getNotifications, acknowledgeNotification } = require('../controllers/notificationController');

router.get('/', getNotifications);
router.post('/:id/acknowledge', acknowledgeNotification);

module.exports = router;
