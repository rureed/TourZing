const express = require('express');
const db = require('../models');
const path = require('path');
const passport = require("../config/passport");
const router = express.Router();


module.exports = (req, res) => {

    function isValidPassword(password) {
        if (password.length >= 8) {
          return true;
        }
        return false;
      }
      
      //uses a regex to check if email is valid
      function isValidEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }

      if (!isValidPassword(req.body.password)) {
        return res.json({status: 'error', message: 'Password must be 8 or more characters.'});
      }
      if (!isValidEmail(req.body.email)) {
        return res.json({status: 'error', message: 'Email address not formed correctly.'});
      }

    db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }).then(function () {
        res.redirect(307, "/auth/login");

    }).catch((error) => {
        console.log(error)
        const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
        req.flash('validationErrors', validationErrors)
        req.flash('data', {

            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        })
        return res.status(400)
      

    })

}