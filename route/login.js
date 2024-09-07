const express = require('express');
const loginRoute = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const user = require('../models/user');


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)

loginRoute.get('/login',(req,res)=>{
    res.render('login')
})

loginRoute.post('/login', passport.authenticate('local', {
    successRedirect: '/', // Redirect to the home page on successful login
    failureRedirect: '/login', // Redirect back to the login page on failure
  }));
  
module.exports = loginRoute;
