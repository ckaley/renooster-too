// dependencies
var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
// var passport = require("passport");
// var profile = require("./routes/profile");
// // configure dotenv
require("dotenv").config();

// new express app
var app = express();

// configure middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // for Passport
// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: true,
//     saveUninitialized: true,
//   })
// ); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions

// //load passport strategies
// require("./config/passport/passport.js")(passport, db.users);

// configure api routes
app.use("/api", require("./routes"));

// // serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
  );
}

// // connect to database
mongoose.connect(process.env.MONGODB_URI);

// define PORT
var PORT = process.env.PORT || 5000;

// start the server
app.listen(PORT, function () {
  console.log("server running on port http://localhost:" + PORT);
});
