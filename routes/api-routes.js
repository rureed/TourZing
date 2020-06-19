const db = require("../models");


module.exports = function (app) {


    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/auth/register", function (req, res) {
        db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.redirect("/account");
    });

    // Route for logging user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });

    app.post("/auth/login", function (req, res) {
        db.User.findAll({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.redirect("/account");
    });

    app.get("/account", function (req, res) {
        res.render("./views/account.handlebars")
    });

    // db.User.findAll({
    
    //let clientName = db.User(name);
      
    //   // Routes
    //   app.get("/account", function(req, res) {
    //     res.render("account", clientName);
    //   });

}














