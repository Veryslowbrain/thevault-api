const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/auth');
const { getCriminals, addCriminal } = require('../controllers/criminalsController');

// List all criminals
router.get('/', authenticateToken, getCriminals);

// Add a new criminal
router.post('/', authenticateToken, addCriminal);

module.exports = router;
