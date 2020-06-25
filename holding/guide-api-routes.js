// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
 
    // Using the passport.authenticate middleware with our local strategy.
    // If the guide has valid login credentials, send them to the accounts handlebars page.
    // Otherwise the guide will be sent an error
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.guide);
    });

    // This will find all the guides
    app.get("/api/guide", function(req, res) {
      db.Guide.findAll({}).then(function(dbGuide) {
        res.json(dbGuide);
      });
    });
    // This will find one specific guide
    app.get("/api/guide/:id", function(req, res) {
      db.Guide.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbGuide) {
        res.json(dbGuide);
      });
    });

    // Route for signing up a tour guide. The guide's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize Guide Model. If the guide is created successfully, proceed to log the guide in,
    // otherwise send back an error
    app.post("/api/register", function(req, res) {
      db.Guide.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        country: req.body.country,
        city: req.body.city,
        tour: req.body.tour,
        cost: req.body.cost,
        rating: req.body.rating
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
    });

    // Route for logging the guide out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our guide to be used client side
    app.get("/api/guide_data", function(req, res) {
        if (!req.guide) {
      // The guide is not logged in, send back an empty object
        res.json({});
    } else {
      // Otherwise send back the guide's name, email, country, city, tour, cost, rating, and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        name: req.guide.name,
        email: req.guide.email,
        country: req.guide.country,
        city: req.guide.city,
        tour: req.guide.tour,
        cost: req.guide.cost,
        rating: req.guide.rating,
        id: req.guide.id
      });
    }
    });

    // DELETE route for deleting guides. We can get the id of the guide to be deleted from
    // req.params.id
  app.delete("/api/guide/:id", function(req, res) {
    // Use the sequelize destroy method to delete a record from our table with the
    // id in req.params.id. res.json the result back to the user
    db.Guide.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGuide) {
      res.json(dbGuide);
    });
  });

    // PUT route for updating guide. We can get the updated guide data from req.body
  app.put("/api/guide", function(req, res) {
    // Use the sequelize update method to update a guide to be equal to the value of req.body
    // req.body will contain the id of the guide we need to update
    db.Guide.update({
      country: req.body.country,
      city: req.body.city,
      tour: req.body.tour,
      cost: req.body.cost
    }, {
      where: {
        id : req.body.id
      }
    }).then(function(dbGuide) {
      res.json(dbGuide);
    });
  });

  // Adding this route with the hopes that it will apply guide name after Hello
  // on the account handlebars page
  app.get("/api/guide_data", function(req, res) {
    res.render("account", {
        membername: name
    });
  });
};
