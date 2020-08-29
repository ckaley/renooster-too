// dependencies
var express = require("express");

// new router
var router = express.Router();

// configure router
router.use("/signup", require("./signup"));
router.use("/login", require("./login"));
router.use("/add", require("./add"));
router.use("/edit", require("./edit"));
router.use("/budgetTracker", require("./budgetTracker"));
router.use("/expiring", require("./expiring"));
router.use("/contact", require("./contact"));
router.use("/profile", require("./profile"));
router.use("/subscriptions", require("./subscriptions"));

module.exports = router;
