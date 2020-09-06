// dependencies
var express = require("express");
var db = require("../models");
const { Mongoose } = require("mongoose");

// new router
var router = express.Router();

router.get("/", (req, res) => {
  // Get Today's Date
  var filterDate = new Date();
  // Number of days to add for the filter
  var numberOfDaysToAdd = 30;
  // Get the new filter date that is 30 days out
  filterDate.setDate(filterDate.getDate() + numberOfDaysToAdd);
  // Define expired Subsciptions Array
  const expiredSubscriptions = [];

  // Retrieve Subscriptions that are do to expire in 30 days or less
  // db.Subscription.find({ endDate: { $lte: filterDate } })
  //   .then((subscriptions) => res.status(200).json(subscriptions))
  //   .catch((err) => res.status(404).json(err));

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
        as: "users",
      },
    },
  ])
    .then((subscriptions) => res.status(200).json(subscriptions))
    .catch((err) => res.status(404).json(err));
});

// export router
module.exports = router;
