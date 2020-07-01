
var passportGuide = require("passport");
var LocalStrategy = require("passport-local").Strategy;
const db = require('../models');


passportGuide.use(new LocalStrategy(
  {
    usernameField: "email"
  },
  function(email, password, done) {
    console.log({email, password})
    db.Guide.findOne({where:{ email: email }}) .then(function(dbGuide) {
      
      // if (err) { return done(err); }
      if (!dbGuide) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      else if (!dbGuide.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, dbGuide);
    });
  }
))


// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passportGuide.serializeUser(function(user, cb) {
  cb(null, user);
});

passportGuide.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passportGuide;
