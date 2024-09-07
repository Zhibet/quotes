const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/QuotesApp')
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: String
});

// Adding passportLocalMongoose plugin to the User schema
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
