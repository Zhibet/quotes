const express = require('express');
const deleteRoute = express.Router();
const mongoose = require('mongoose');
const cardData= require('../models/cardModel')

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || '=mongodb+srv://baha12:Guinea12@quotes.uo6wr.mongodb.net/?retryWrites=true&w=majority&appName=quotes')


// Route to get home data
deleteRoute.get('/new/:id', async (req, res) => {
    const id = req.params.id;
  try {
    const card_data = await cardData.findByIdAndDelete(id)
    console.log(process.env.MONGO_URI)
    console.log(card_data)
    res.redirect('/'); 
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).send('Internal Server Error'); 
  }
});

module.exports = deleteRoute;
