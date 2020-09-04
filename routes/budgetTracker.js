// dependencies
var express = require("express");
var db = require("../models");

// new router
var router = express.Router();

router.get("/", (req, res) => {
  console.log("Budget Tracker Route");
});

// export router
module.exports = router;
