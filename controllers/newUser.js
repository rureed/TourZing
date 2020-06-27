const db = require('../models');
const path = require('path');
const flash = require("connect-flash");

module.exports = (req, res) => {
    let firstName = ""
    let lastName = ""
    let username =""
    let password =""
    const data = req.flash('data')[0]

    if(typeof data !="undefined"){
        firstName = data.firstName
        lastName = data.lastName
        username = data.username
        password = data.password
    }

    if (req.user) {
        res.redirect("/account");
      }
      res.render('register', {
        // errors: req.session.validationErrors
        errors: flash('validationErrors'),
        firstName: firstName,
        lastName: lastName,
        username: username,
        password:password
    });

   
    // app.get("/auth/register", function(req, res) {
        // If the user already has an account send them to the members page
        // if (req.user) {
        //   res.redirect("/account");
        // }
        // res.render('register');
    //   });    

};