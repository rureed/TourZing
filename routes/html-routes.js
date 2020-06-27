const path = require('path');
module.exports = function (app) {
    
    // //Display add user form
    // app.get("/auth/register", function (req, res) {
    //     res.render(path.join(__dirname, "../views/register.handlebars"));
    // });
    // //Display login form
    // app.get("/auth/login", function (req, res) {
    //     res.render(path.join(__dirname, "../views/login.handlebars"));
    // });
    // app.get("/guide/search", function (req, res) {	
    //     res.render(path.join(__dirname, "../views/results.handlebars"));	
    // });
    // app.get("/auth/register", function(req, res) {
    //     // If the user already has an account send them to the members page
    //     if (req.user) {
    //       res.redirect("/account");
    //     }
    //     res.sendFile(path.join(__dirname, "../views/register.handlebars"));
    //   });
    //   app.get("/auth/login", function(req, res) {
    //     // If the user already has an account send them to the members page
    //     if (req.user) {
    //       res.redirect("/account");
    //     }
    //     res.sendFile(path.join(__dirname, "../views/login.handlebars"));
    //   });
    // app.get("/account", function (req, res) {
    //     res.render(path.join(__dirname, "../views/account.handlebars"));
    // });
    // //Display ratings page from account page when selected
    // app.get("/auth/rating", function (req, res) {
    //     res.render(path.join(__dirname, "../views/ratings.handlebars"));
    // });
    // app.get("/auth/tourSignUp", function (req, res) {
    //     res.render(path.join(__dirname, "../views/tour.handlebars"));
    // });
    // // Route for logging user out
    // app.get("/logout", function (req, res) {
    //     res.redirect("/");
    // });
    // // ------------------------
    // // Tour Guide syntax
    // app.get("/guide/register", function (req, res) {
    //     res.render(path.join(__dirname, "../views/registerGuide.handlebars"));
    // });
    // app.get("/guide/login", function (req, res) {
    //     res.render(path.join(__dirname, "../views/loginGuide.handlebars"));
    // });
    // app.get("/guide/register", function(req, res) {
    //     // If the user already has an account send them to the members page
    //     if (req.guide) {
    //       res.redirect("/account");
    //     }
    //     res.sendFile(path.join(__dirname, "../views/registerGuide.handlebars"));
    // });
    // app.get("/guide/login", function(req, res) {
    //     // If the user already has an account send them to the members page
    //     if (req.guide) {
    //       res.redirect("/account");
    //     }
    //     res.sendFile(path.join(__dirname, "../views/loginGuide.handlebars"));
    // });
};