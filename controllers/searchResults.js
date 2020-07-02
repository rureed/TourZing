// const db = require('../models');
// const { response } = require('express');


// module.exports = (req, res) => {

//     const guideArray = [];


//     db.Guide.findAll({
//         where: {
//           firstName: req.params.firstName
//         }
//       })
//       .then(function (err, data) {
//         if (err) {
//             response.end()
//             return;
//         } else {
//         console.log(data, "data should go here")
//         }    

//         guideArray.push(data)

//     for (var i = 0; i < guideArray.length; i++) {

//         if (guideArray[i].firstName === req.user.firstName) {
//             return res.render("search", guideArray[i]);
//           }
//     }
//   });

const db = require('../models');
const { response } = require('express');


module.exports = (req, res) => {

console.log(req.params);

    db.Guide.findAll({
        where: {
            city: req.params.city
        }
    })
        .then(function (data, err) {
            
            if (err) {
                console.log(err)
                res.send("fail")
                throw err


            } else {
                console.log("data")
                res.send(data)
            }
            res.render("search", search)
        });

};
