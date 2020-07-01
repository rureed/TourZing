
const express = require("express");
const session = require("express-session");
const path = require("path");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require("./config/passport");
// const passportGuide = require("./config/passportGuide");
const exphbs = require("express-handlebars");
const flash = require("connect-flash");
const isAuthenticated = require("./config/middleware/isAuthenticated");
// const isAuthenticatedGuide = require("./config/middleware/isAuthenticatedGuide");


const PORT = process.env.PORT || 7000;
const db = require("./models");

const app = express();
app.set("view engine", "handlebars");

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser())

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.use(flash());

app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


// app.use(passportGuide.initialize());
// app.use(passportGuide.session());


const homePageController = require("./controllers/home");

const newUserController = require("./controllers/newUser");
const storeUserController = require("./controllers/storeUser");
const loginController = require("./controllers/login");

// const newGuideController = require("./controllers/newGuide");
// const storeGuideController = require("./controllers/storeGuide");
// const loginGuideController = require("./controllers/loginGuide");

const newTourController = require("./controllers/newTour");
const ratingsController = require("./controllers/newRatings");
const storeTourController = require("./controllers/storeTour");
const newSearchController = require("./controllers/newSearch");
const searchResultsController = require("./controllers/searchResults");


app.get('/', homePageController);
app.get('/auth/register', newUserController);
app.post('/auth/register', storeUserController);
app.get('/auth/login', loginController);
app.post('/auth/login',
  passport.authenticate('local', {
    successRedirect: '/account',
    failureRedirect: '/',
    failureFlash: true
  }));
app.get('/account', isAuthenticated, function (req, res) {
  console.log(req.user)
  res.render('account', { membername: req.user.firstName }
  )
});

// app.get('/guide/register', newGuideController);
// app.post('/guide/register', storeGuideController);
// app.get('/guide/login', loginGuideController);

// app.post('/guide/login',
//   passportGuide.authenticate('local', {
//     successRedirect: '/accountGuide',
//     failureRedirect: '/',
//     failureFlash: true
//   }));

// app.get('/accountGuide', isAuthenticatedGuide, function (req, res) {
//   console.log(req.user)
//   res.render('accountGuide', { guidename: req.user.firstName }
//   )
// });


app.get('/tour/signup', newTourController);
app.post('/tour/signup', storeTourController);

app.get('/ratings', ratingsController);

app.get('/guide/search', newSearchController);
app.get('/guide/search/:firstName', searchResultsController);


app.get('/logout', function (req, res) {
  req.logout();
  res.redirect("/");
});


// // Requiring our routes
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);



db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
