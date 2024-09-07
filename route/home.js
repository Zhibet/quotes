const express = require('express');
const homeRoute = express.Router();
const mongoose = require('mongoose');
const homeData = require('../models/homeModel')
const cardData= require('../models/cardModel')

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/QuotesApp')


// Route to get home data
homeRoute.get('/', async (req, res) => {
  try {
    const username = req.user.username;
    const data = await homeData.find({})
    const card_data = await cardData.find({})
    console.log(process.env.MONGO_URI)
    console.log(card_data)
    console.log(username)
    res.render('home', { data, card_data,username }); 
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).send('Internal Server Error'); 
  }
});

module.exports = homeRoute;
