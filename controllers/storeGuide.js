const db = require('../models/');
const path = require('path');

module.exports = (req, res) => {
    db.Guide.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        city: req.body.city
    },
    ).then(function() {
        res.redirect(307, "/api/login");
      
    }).catch((error) => {
        console.log(error)
        const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
        req.flash('validationErrors', validationErrors)
        req.flash('data', {

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        city: req.body.city
        })
        return res.status(400)
        
    })
}