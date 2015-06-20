var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstname: String,
  lastname: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  email: String,
  profile_image: String 
});

var User = mongoose.model('User', userSchema);

// make this available
module.exports = {
    User: User
};

