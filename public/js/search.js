// const db = require("../../models");

// $(document).ready(function () {
//     // This file just does a GET request to figure out which user is logged in
//     // and updates the HTML on the page
//     // $.get("/api/guide_list").then(function(data) {
//     //   $(".well").append(data);
//     // });

//     $.ajax("/api/guide-list", {
//         type: "GET",
//         data: guideList
//     }).then(
//         function () {
//             console.log("added tour guides");
//             // Reload the page to get the updated list
//             location.reload();
//         }
//     );

//     app.get("/guide/search", function(req, res) {
//         db.Guide.findAll({
//             fistName: req.params.firstName,
//             phone: req.params.phone
//         })
//         .then(function() {
//             res.render("search", )
//         })
        
//         for (var i = 0; i < guides.length; i++) {
         
//             return res.render("search", guides[i]);
          
//         }
//     });




// });

