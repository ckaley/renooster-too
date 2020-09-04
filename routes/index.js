// dependencies
var express = require("express");

// new router
var router = express.Router();

// configure router
//router.use("/signup", require("./signup"));
router.use("/budgetTracker", require("./budgetTracker"));
router.use("/contact", require("./contact"));
router.use("/expiring", require("./expiring"));
router.use("/login", require("./login"));
router.use("/profile", require("./profile"));
router.use("/subscriptions", require("./subscriptions"));

module.exports = router;
