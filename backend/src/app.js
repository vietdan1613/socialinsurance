const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
const helmet = require("helmet");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet()); // Add Helmet as a middleware

// Allow all origins
app.use(cors());

// Routes
app.use('/api', routes);

module.exports = app;
