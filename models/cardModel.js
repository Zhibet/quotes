const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://baha12:Guinea12@quotes.uo6wr.mongodb.net/?retryWrites=true&w=majority&appName=quotes')

const cardchema = new mongoose.Schema({
  title: { type: String },
  paragraph: { type: String },
  date_created: { type: Date, default: Date.now },
  category:{type: String},
});

const Card = mongoose.model('Card', cardchema);

const cardData = new Card({
  title: 'Example Title',
  paragraph: 'the examole will appear here',
  category: 'l'
});

Card.deleteMany({})
  .then(() => {
    return cardData.save();
  })
  .then(() => {
    console.log('card data saved successfully');
  })
  .catch(err => {
    console.error('Error during operation:', err);
  });

  module.exports = Card;