// //IMPORT DEPENDENCIES
// var db = require("../models");
// var authController = require("./authcontroller.js");

// module.exports = function(app, passport) {

//     // @route: GET /
//     // @desc: Route that executes the dashboard method defined in authcontroller.js. displays the main page or '/' (index)
//     app.get('/', isLoggedIn, authController.dashboard);

//     // @route:  GET /
//     // @desc:   Route that executes the register method defined in authcontroller.js. displays the regiter page
//     app.get('/register', authController.register);

//     // @route:  GET /
//     // @desc:   Route that executes the login method defined in authcontroller.js. displays the login page
//     app.get('/login', authController.login);

//     // @route:  POST /
//     // @desc:   Register a new user
//     app.post('/register', passport.authenticate('local-signup', {
//         successRedirect: '/',
//         failureRedirect: '/register'
//     }
//     ));

//     // @route: GET /
//     // @desc: Rout that executes the logout method defined in authcontroller.js. detroys the session
//     app.get('/logout',authController.logout);

//     // @route: POST /
//     // @desc: Route for signing in a user (creates a session)
//     app.post('/login', passport.authenticate('local-signin', {
//         successRedirect: '/',
//         failureRedirect: '/login'
//     }));

//     //function that restricts access to '/' page unless the user is logged in
//     function isLoggedIn(req, res, next) {
//         if (req.isAuthenticated())
//             return next();
//         res.redirect('/login');
//     };
// };
