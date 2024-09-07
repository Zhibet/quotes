const express = require('express');
const logOutRoute = express.Router();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)


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
