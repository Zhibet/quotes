const express = require('express');
const homeRoute = express.Router();
const mongoose = require('mongoose');
const homeData = require('../models/homeModel');
const cardData = require('../models/cardModel');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

// Route to get home data
homeRoute.get('/', async (req, res) => {
  try {
    // Ensure user is authenticated
    const username = req.user ? req.user.username : 'Guest';

    // Fetch data from MongoDB
    const data = await homeData.find({});
    const card_data = await cardData.find({});

    // Optional: sanitize data if necessary
    // Example: data = data.map(item => sanitize(item));
    // Example: card_data = card_data.map(item => sanitize(item));

    // Render the home page with data
    res.render('home', { data, card_data, username });

  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = homeRoute;
