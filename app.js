const express = require('express');
const mongoose = require('mongoose');
const homeRoute = require('./route/home');
const deleteRoute = require('./route/delete');
const newRoute = require('./route/newRoute');
const loginRoute = require('./route/login');
const User = require('./models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const engine = require('ejs-mate');
const MongoStore = require('connect-mongo');
const logOutRoute = require('./route/logout');
require('dotenv').config();

const app = express();

// Connecting to mongoose with error handling
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/QuotesApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});

// Templating
app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));

// Body parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Session middleware
app.use(session({
  secret: process.env.secret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === 'production' },
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/QuotesApp',
    ttl: 14 * 24 * 60 * 60 // = 14 days. Default
  })
}));

// Passport setup
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//local factoring
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// Routes setup
app.use('/', homeRoute);
app.use('/', deleteRoute);
app.use('/', newRoute);
app.use('/', loginRoute);
app.use('/',logOutRoute)

// Server setup
const port = 3000;
app.listen(port, () => {
  console.log(`The app is live on port ${port}`);
});
