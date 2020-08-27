//IMPORT DEPENDENCIES
var bCrypt = require('bcrypt-nodejs');


module.exports = function(passport, user) {
    //initialize the passport-local strategy and the user model
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    //serialize user
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // deserialize user 
    passport.deserializeUser(function(id, done) {
        User.findByPk(id).then(function(user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });

    //==========================================================================================================================
    //STRATEGIES
    //==========================================================================================================================

    //CUSTOM LOCAL STRATEGY FOR CREATING AND ADDING A NEW USER
    //--------------------------------------------------------------------------------------------------------------------------
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function(req, email, password, done) {
            //hash password
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

        //check if user exists, and if not, add them
        User.findOne({
            where: {
                email: email
            }
        }).then(function(user) {
            if (user)
            {
                return done(null, false, {
                    message: 'This email address has already been registered'
                });
            } else
            {
                var userPassword = generateHash(password);
                var data =
                    {
                        email: email,
                        password: userPassword,
                        name: req.body.name,
                    };

                User.create(data).then(function(newUser, created) {
                    if (!newUser) {
                        return done(null, false);
                    }
                    if (newUser) {
                        return done(null, newUser);
                    }
                });
            }
        });
    }
));



    //CUSTOM LOCAL STRATEGY FOR SIGNING IN A NEW USER
    //--------------------------------------------------------------------------------------------------------------------------

    passport.use('local-signin', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true //this allows us to pass back the entire request to the callback
        },

        function(req, email, password, done){
            var User = user;
            var isValidPassword = function(userpass, password){
                return bCrypt.compareSync(password, userpass);
            }
            User.findOne({
                where: {
                    email: email
                }
            }).then(function(user){
                if (!user){
                    return done(null, false, {
                        message: "This user does not exist"
                    });
                }

                if (!isValidPassword(user.password, password)){
                    return done(null, false, {
                        message: "Incorrect password"
                    });
                }

                var userinfo = user.get();
                return done(null, userinfo);
            }).catch(function(err){
                console.log("Error loggin in user", err);
                return done(null, false, {
                    message: "There was an error signing you in"
                });
            });
        }
    ));
};


