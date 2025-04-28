const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const criminalRoutes = require('./routes/criminals');
const sightingsRoutes = require('./routes/sightings');
const userRoutes = require('./routes/users');

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Database Connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Make db accessible in req object
app.use((req, res, next) => {
  req.pool = pool;
  next();
});

// Routes
app.use('/api/criminals', criminalRoutes);
app.use('/api/sightings', sightingsRoutes);
app.use('/api/users', userRoutes);

// Basic Test Route
app.get('/', (req, res) => {
  res.send('The Vault API is running...');
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
