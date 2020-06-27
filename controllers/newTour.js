module.exports = (req, res) => {
    if (req.session.userId){
        return res.render('tour')   
}
res.redirect('/account')
}