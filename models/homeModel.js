const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://baha12:Guinea12@quotes.uo6wr.mongodb.net/?retryWrites=true&w=majority&appName=quotes')


const homeSchema = new mongoose.Schema({
  category: {
    category_title:{ type: String },
    category_one: { type: String },
    category_two: { type: String },
    category_three: { type: String },
    category_four: { type: String },
  },
  title: { type: String },
});

const Home = mongoose.model('Home', homeSchema);

const homeData = new Home({
  category: {
    category_title: 'categories',
    category_one: 'R. research',
    category_two: 'l. life',
    category_three: 't. technology',
    category_four: 'c. cool'
  },
  title: 'welcome',
});

Home.deleteMany({})
  .then(() => {
    return homeData.save();
  })
  .then(() => {
    console.log('Home data saved successfully');
  })
  .catch(err => {
    console.error('Error during operation:', err);
  });

  module.exports = Home;