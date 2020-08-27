//DEFINE FUNCTIONS THAT RENDER PAGES. TO BE USED IN auth.js
var register = function(req, res){
    res.render("register")
};

var login = function(req, res){
    res.render("login")
}

var logout = function(req, res){
    req.session.destroy(function(err){
        res.redirect('/login')
    })
}

var dashboard = function(req, res){
    res.render("index")
}

//EXPORT FUNCTIONS
exports.register = register;
exports.login = login;
exports.logout = logout;
exports.dashboard = dashboard;