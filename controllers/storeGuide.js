const db = require('../models/');
const path = require('path');

module.exports = (req, res) => {
    db.Guide.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        city: req.body.city},
        ).then((user) => {
            // if(error){
            //     const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            //     req.flash('validationErrors', validationErrors)
            //     req.flash('data',{
            //         firstName: req.body.firstName,
            //         lastName: req.body.lastName,
            //         email: req.body.email,
            //         password: req.body.password
            //     })
            //     return res.redirect('/auth/register')
            // }else {
        res.redirect('/accountGuide')
    })
}