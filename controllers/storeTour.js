const db = require('../models');
const path = require('path');

module.exports = (req, res) => {

    db.TourSet.create({
        guideFirstName: req.body.guideFirstName,
        guideLastName: req.body.guideLastName,
        tourname: req.body.tourName,
        date: req.body.date,
        phone: req.body.phone,
        creditcard: req.body.creditCard
      }, (error,user) => {
        if(error){
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('validationErrors', validationErrors)
            req.flash('data',{
                guideFirstName: req.body.guideFirstName,
                guideLastName: req.body.guideLastName,
                tourname: req.body.tourName,
                date: req.body.date,
                phone: req.body.phone,
                creditcard: req.body.creditCard
              })
            return res.redirect('/account')
        }
    })
    res.redirect("/account");
    
    
}