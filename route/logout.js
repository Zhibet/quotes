const express = require('express');
const logOutRoute = express.Router();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://baha12:Guinea12@quotes.uo6wr.mongodb.net/?retryWrites=true&w=majority&appName=quotes')


// Route to get home data
logOutRoute.get('/logout', async (req, res,next) => {
    req.logOut(function (err) {
        if (err) {
          return next(err);
        }
        // Redirect to homepage or login page after successful logout
        res.redirect('/login');
      });
});

module.exports = logOutRoute;
