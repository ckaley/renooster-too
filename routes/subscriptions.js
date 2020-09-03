// dependencies
var express = require("express");
var db = require("../models");

// new router
var router = express.Router();

router.get("/:id", (req, res) => {
  db.Subscription.find({ profileID: req.params.id })
    .then((subscription) => res.status(200).json(subscription))
    .catch((err) => res.status(404).json(err));
});
router.get("/profile/:id", (req, res) => {
  db.Subscription.findOne({ _id: req.params.id })
    .then((subscription) => res.status(200).json(subscription))
    .catch((err) => res.status(404).json(err));
});

router.post("/", (req, res) => {
  db.Subscription.create(req.body)
    .then((subscription) => res.status(200).json(subscription))
    .catch((err) => {
      console.log(err);
      res.status(422).json(err);
    });
});

router.put("/:id", (req, res) => {
  db.Subscription.findByIdAndUpdate({ _id: req.params.id }, { ...req.body })
    .then((subscription) => res.status(200).json(subscription))
    .catch((err) => {
      console.log(err);
      res.status(422).json(err);
    });
});

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
