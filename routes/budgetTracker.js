// dependencies
var express = require("express");
var db = require("../models");

// new router
var router = express.Router();

// router.get("/", (req, res) => {
//   console.log("Budget Tracker Route");
// });
router.get("/chart/:id", (req, res) => {
  db.Subscription.find({ profileID: req.params.id })
    .then((subscription) => res.status(200).json(subscription))
    .catch((err) => res.status(404).json(err));
});

// export router
module.exports = router;
