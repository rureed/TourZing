const db = require('../models');
const path = require('path');

module.exports = (req, res) => {

    db.TourSet.create({
       firstName: req.body.firstName,
        lastName: req.body.guideLastName,
        tourname: req.body.tourName,
        creditcard: req.body.creditcard,
        tourCity: req.body.tourCity,
        phone: req.body.phone,
        }).then(function () {
          res.redirect(307, "/auth/login");
  
      }).catch((error) => {
          console.log(error)
          const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
          req.flash('validationErrors', validationErrors)
          req.flash('data', {
  
            firstName: req.body.firstName,
            lastName: req.body.guideLastName,
            tourname: req.body.tourName,
            creditcard: req.body.creditcard,
            tourCity: req.body.tourCity,
            phone: req.body.phone,
          })
          return res.status(400)
    
})
   res.redirect("/account") 
    
    
}