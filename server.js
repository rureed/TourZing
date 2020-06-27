const express = require("express");
const session = require("express-session");
const path = require("path");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require("./config/passport");
const exphbs = require("express-handlebars");
const flash = require("connect-flash");
const TourSet = require('./models/');
const isAuthenticated = require("./config/middleware/isAuthenticated");

const PORT = process.env.PORT || 7000;
const db = require("./models");

const app = express();
app.set("view engine", "handlebars");

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser())

// app.use(session({ secret: "keyboard cat" }));
// app.use(passport.initialize());
// app.use(passport.session());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.use(flash());




app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());








const homePageController = require("./controllers/home");
const newUserController = require("./controllers/newUser");
const storeUserController = require("./controllers/storeUser");
const loginController = require("./controllers/login");
// const loginUserController = require('./controllers/userLogin');
const guideLoginController = require("./controllers/guideLogin");
// const accountController = require("./controllers/main");
const guideAccountController = require("./controllers/mainGuide");
const newGuideController = require("./controllers/newGuide");
const storeGuideController = require("./controllers/storeGuide")
const newTourController = require("./controllers/newTour");
const ratingsController = require("./controllers/ratings");



app.get('/', homePageController);
app.get('/auth/register', newUserController);
app.post('/auth/register', storeUserController);
app.get('/auth/login', loginController);
// app.post('/auth/login', loginUserController);
app.get('/account', isAuthenticated, function (req, res) {
  console.log(req.user)
    res.render('account', {membername: req.user.firstName}
    )
  // res.redirect('account')
});
// app.post("/api/login", passport.authenticate("local"), function(req, res) {
//   res.json(req.user);
// });



// app.post('/auth/login',
//   passport.authenticate('local'),
//   function (req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     res.redirect('/account' + req.user.firstName);
//   });

app.post('/auth/login',
  passport.authenticate('local', {
    successRedirect: '/account',
    failureRedirect: '/',
    failureFlash: true}));



// app.get('/account', accountController);
app.get('/guide/login', guideLoginController);
app.get('/accountGuide', guideAccountController);
app.get('/guide/register', newGuideController);
app.get('/tour-sign-up', newTourController);
app.get('/ratings', ratingsController);
app.get('/logout', function (req, res) {
  req.logout();
  res.redirect("/");
});


app.post('/guide-user/register', storeGuideController);
app.post('/guide/login', guideLoginController);

// app.post('/tour/sign-up', async function (req, res) {
//   await TourSet.create({
//     guideFirstName: req.body.guideFirstName,
//     guideLastName: req.body.guideLastName,
//     tourname: req.body.tourName,
//     date: req.body.date,
//     phone: req.body.phone,
//     creditcard: req.body.creditCard
//   }),
//     res.redirect('/account')
// });
app.post('/ratings/post', async function (req, res) {
  await TourSet.create({
    guideFirstName: req.body.guideFirstName,
    guideLastName: req.body.guideLastName,
    rating: rating
  }),
    res.redirect('/account')
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
