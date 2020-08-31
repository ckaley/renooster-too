// dependencies
var express = require("express");
var db = require("../models");

// new router
var router = express.Router();

// Matches with localhost:3001/api/delete/:id
router.delete("/:id", (req, res) => {
  db.Subscription.deleteOne({ _id: req.params.id })
    .then((subscription) => res.status(200).json(subscription))
    .catch((err) => {
      console.log(err);
      res.status(422).json(err);
    });
});

// export router
module.exports = router;
