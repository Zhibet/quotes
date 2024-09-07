const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://baha12:Guinea12@quotes.uo6wr.mongodb.net/?retryWrites=true&w=majority&appName=quotes')
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: String
});

// Adding passportLocalMongoose plugin to the User schema
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
