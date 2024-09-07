const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    // User is not authenticated, redirect to the login page or show an error
    res.redirect('/login');
  };
  
module.exports = isLoggedIn;  