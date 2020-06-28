const db = require('../models');
const path = require('path');

module.exports = (req, res) => {

    db.TourSet.create({
        guideFirstName: req.body.guideFirstName,
        guideLastName: req.body.guideLastName,
        tourname: req.body.tourName,
        creditcard: req.body.creditcard,
        tourDate: req.body.tourDate,
        phone: req.body.phone,
        }).then((user) => {
      }, (error,user) => {
        if(error){
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('validationErrors', validationErrors)
            req.flash('data',{
                guideFirstName: req.body.guideFirstName,
                guideLastName: req.body.guideLastName,
                tour: req.body.tour,
                creditcard: req.body.creditcard,
                tourDate: req.body.tourDate,
                phone: req.body.phone,
                
              })
            res.redirect('/account')
        }
    
})
   res.redirect("/account") 
    
    
}