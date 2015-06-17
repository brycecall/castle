var User = require('../models/user').User;

exports.addUser = function(user, next) {
    var newUser = new User({
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      password: user.password,
      admin: user.admin,
      email: user.email,
      profile_image: user.profile_image 
    });

    newUser.save(function(err) {
        if (err) {
           return next(err);
        }
        next(null);
    });

};
