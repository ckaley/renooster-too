// dependencies
var express = require("express");
var db = require("../models");

// new router
var router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  db.Profile.findOne({ email: req.body.email })
    .then((profile) => res.status(200).json(profile))
    .catch((err) => res.status(404).json(err));
});

// export router
module.exports = router;
