// dependencies
var express = require("express");
var db = require("../models");

// new router
var router = express.Router();

router.post("/", (req, res) => {
  db.Subscription.create(req.body)
    .then((subscription) => res.status(200).json(subscription))
    .catch((err) => {
      console.log(err);
      res.status(422).json(err);
    });
});

// export router
module.exports = router;
