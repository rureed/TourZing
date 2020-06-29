const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = (req, res) => {
    res.render('loginGuide')
};