
const path = require('path');


module.exports = function (app) {



    //Retreive home page using handlebars

    app.get('/', function (req, res) {
        res.render('home', {
            about: `Welcome to TourZing, your one stop place for matching tourists with excellent tour
    guides and amazing tours. When you go on vacation, you want maximize the time you have to see the best sights 
    and have the best experience possible. Our curated list of experienced tour guides know the where and when
    of the premier local sites and establishments in your place of choice. So come along and tour with us!`
        });
    });

    //Display add user form

    app.get("/auth/register", function (req, res) {
        res.render(path.join(__dirname, "../views/register.handlebars"));
    });

    //Display login form

    app.get("/auth/login", function (req, res) {
        res.render(path.join(__dirname, "../views/login.handlebars"));
    });

    app.get("/guide/search", function (req, res) {
        res.render(path.join(__dirname, "../views/results.handlebars"));
    });

    

    app.get("/auth/register", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
          res.redirect("/account");
        }
        res.sendFile(path.join(__dirname, "../views/register.handlebars"));
      });
    
      app.get("/auth/login", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
          res.redirect("/account");
        }
        res.sendFile(path.join(__dirname, "../views/login.handlebars"));
      });




    app.get("/account", function (req, res) {
        res.render(path.join(__dirname, "../views/account.handlebars"));
    });

    //Display ratings page from account page when selected

    app.get("/auth/rating", function (req, res) {
        res.render(path.join(__dirname, "../views/ratings.handlebars"));
    });

    app.get("/auth/tourSignUp", function (req, res) {
        res.render(path.join(__dirname, "../views/tour.handlebars"));
    });


    // Route for logging user out
    app.get("/logout", function (req, res) {
        res.redirect("/");
    });

    
    // ------------------------
    // Tour Guide syntax
    
    app.get("/guide/register", function (req, res) {
        res.render(path.join(__dirname, "../views/registerGuide.handlebars"));
    });

    app.get("/guide/login", function (req, res) {
        res.render(path.join(__dirname, "../views/loginGuide.handlebars"));
    });

    app.get("/guide/register", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.guide) {
          res.redirect("/account");
        }
        res.sendFile(path.join(__dirname, "../views/registerGuide.handlebars"));
    });

    app.get("/guide/login", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.guide) {
          res.redirect("/account");
        }
        res.sendFile(path.join(__dirname, "../views/loginGuide.handlebars"));
    });

};