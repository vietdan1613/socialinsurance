const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow all origins
app.use(cors());

// Routes
app.use('/api', routes);

module.exports = app;
