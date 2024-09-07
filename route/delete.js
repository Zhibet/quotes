const express = require('express');
const deleteRoute = express.Router();
const mongoose = require('mongoose');
const cardData= require('../models/cardModel')

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)


// Route to get home data
deleteRoute.get('/new/:id', async (req, res) => {
    const id = req.params.id;
  try {
    const card_data = await cardData.findByIdAndDelete(id)
    res.redirect('/'); 
  } catch (err) {
    res.status(500).send('Internal Server Error'); 
  }
});

module.exports = deleteRoute;
