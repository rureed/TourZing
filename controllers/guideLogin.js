const bcrypt = require('bcrypt');
const db = require('../models');


module.exports = (req, res) => {
    // const { email, password } = req.body;

    // db.Guide.findOne({ email: email }, (error, user) => {
    //     if (user) {
    //         bcrypt.compare(password, user.password, (error, same) => {
    //             if (same) {
    //                 req.session.userId = user._id
    //                 res.redirect('/accountGuide')
    //             }
    //             else {
    //                 res.redirect('/guide/login')
    //             }
    //         })
    //     }
    //     else {
    //         res.redirect('guide/login')
    //     }
    // })

    
        res.render('loginGuide')
    

};