const db = require('../models');
var bcrypt = require("bcryptjs");
const path = require('path');
const passport = require("../config/passport");


module.exports = (req, res) => {


    // If the user already has an account send them to the members page
    if (req.user) {
        res.redirect("/account");

    };


    db.User.findAll({
        where:{
        email: req.body.email,
        password: req.body.password}
    })
    res.redirect("/account");


};