const express = require('express');
const newRoute = express.Router();
const mongoose = require('mongoose');
const Card = require('../models/cardModel');
const isLoggedIn = require('../islogIn');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/QuotesApp')


// Route to get home data
newRoute.get('/new',isLoggedIn, async (req, res) => {
  try {
   
    res.render('newForm'); 
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).send('Internal Server Error'); 
  }
});

newRoute.post('/new',async(req,res)=>{
    const {title,paragraph,category} = req.body;
    try {
        const newCard = new Card({
            title,
            paragraph,
            category
        })
        console.log(req.body)
        await newCard.save().then(()=>{console.log(`the new card is ...${newCard}`)})
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
})

module.exports = newRoute;
