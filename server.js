var express = require("express");
var session = require("express-session");
const path = require("path");
// Requiring passport as we've configured it
var passport = require("./config/passport");
var exphbs = require("express-handlebars");

var app = express();
app.use(express.urlencoded({ extended: true }));

var PORT = process.env.PORT || 7000;
var db = require("./models");



if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
       res.sendFile(path.resolve(__dirname,  "build", "index.html"));
   });
 }


app.use(express.json());
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));



// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
