const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/auth');
const { reportSighting } = require('../controllers/sightingsController');

// Report a new sighting
router.post('/', authenticateToken, reportSighting);

module.exports = router;
