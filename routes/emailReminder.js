// dependencies
var express = require("express");
var nodemailer = require("nodemailer");
var db = require("../models");
const { Mongoose } = require("mongoose");
var moment = require("moment");

// new router
var router = express.Router();

router.post("/", (req, res) => {
  // Get Today's Date
  var filterDate = new Date();
  // Number of days to add for the filter
  var numberOfDaysToAdd = 30;
  // Get the new filter date that is 30 days out
  filterDate.setDate(filterDate.getDate() + numberOfDaysToAdd);
  // Define expired Subsciptions Array
  const expiredSubscriptions = [];

  // Retrieve Subscriptions that are do to expire in 30 days
  // or less and also lookup the user asscoiated with the subscription
  db.Subscription.aggregate([
    {
      $match: {
        endDate: { $lte: filterDate },
      },
    },
    {
      $lookup: {
        from: "profiles",
        localField: "profileID",
        foreignField: "_id",
        as: "user",
      },
    },
  ])
    .then((expiredSubscriptions) => {
      var firstName = "";
      var lastName = "";
      var email = "";
      var expSubscription = "";
      var expireDate = "";

      // create nodemailer transport
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASS,
        },
      });

      for (var i = 0; i < expiredSubscriptions.length; i++) {
        // set values
        firstName = expiredSubscriptions[i].user[0].firstName;
        lastName = expiredSubscriptions[i].user[0].lastName;
        email = expiredSubscriptions[i].user[0].email;
        expSubscription = expiredSubscriptions[i].name;
        expireDate = moment(expiredSubscriptions[i].endDate).format(
          "MM/DD/YYYY"
        );

        // define mail options
        var mailOptions = {
          to: email,
          subject: "You have a Subscription that is about to expire! ",
          text:
            firstName +
            " " +
            lastName +
            ", " +
            " | " +
            "Your Subscription to " +
            expSubscription +
            " expires on " +
            expireDate +
            " | " +
            "This is a courtesy reminder for you to renew your subscription!" +
            " | " +
            "Thank you," +
            " | " +
            "The Renooster Team",
          html:
            "<p>" +
            firstName +
            " " +
            lastName +
            ",</p>" +
            "<p></p>" +
            "<p>Your Subscription to " +
            expSubscription +
            " expires on " +
            expireDate +
            "</p>" +
            "<p></p>" +
            "<p></p>" +
            "<p>This is a courtesy reminder for you to renew your subscription!</p>" +
            "<p></p>" +
            "<p>Thank you,<p>" +
            "<p></p>" +
            "<p>The Renooster Team</p>",
        };

        // send mail
        transporter.sendMail(mailOptions, (err, result) => {
          if (err) {
            console.log("Falied to send message");
          }
          console.log("Message Sent");
        });
        console.log();
      }

      res
        .status(200)
        .send("Successfully sent " + expiredSubscriptions.length + " messages");
    })
    .catch((err) => res.status(404).json(err));
});

// export router
module.exports = router;
