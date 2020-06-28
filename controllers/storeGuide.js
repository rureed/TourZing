const db = require('../models/');
const path = require('path');

module.exports = (req, res) => {
    db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        city: req.body.city},
    (error,user) =>{
        if(error) {
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('validationErrors', validationErrors)
            req.flash('data', req.body)
            return res.redirect('./guide/register')
        }
        res.redirect('/account')
    })
}