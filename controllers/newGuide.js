const flash = require("connect-flash");

module.exports = (req, res) => {
    let username = ""
    let password = ""
    let phone = ""
    let city = ""
    let cost = ""
    const data = req.flash('data')[0]

    if (typeof data != "undefined") {
        username = data.username
        password = data.password
        phone = data.phone
        city = data.city
        cost = data.cost
    }

    res.render("registerGuide", {
        // errors: req.session.validationErrors
        errors: flash('validationErrors'),
        username: username,
        password: password,
        phone: phone,
        city: city,
        cost: cost
    });
};