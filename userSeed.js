const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://baha12:Guinea12@quotes.uo6wr.mongodb.net/?retryWrites=true&w=majority&appName=quotes')
const passportLocalMongoose = require('passport-local-mongoose')

const quoteSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
});

quoteSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', quoteSchema);

// Create and save a new user
const user = new User({ username: 'amadoubah12341@gmail.com' });
User.register(user, 'password123', (err, user) => {
    if (err) {
        console.error('Error registering user:', err);
    } else {
        console.log('User registered successfully:');
    }
});

module.exports = User;