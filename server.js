var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var session = require("express-session");
var passport = require("./config/passport");

var app = express();

var PORT = process.env.PORT || 7000;
var db = require("./models");


if (process.env.NODE_ENV === "production") {
   app.use(express.static("build"));
   app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,  "build", "index.html"));
    });
  }




app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
