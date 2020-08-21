// dependencies
var express = require('express');

// new router
var router = express.Router();

// configure router
router.use('/contact', require('./contact'));
router.use('/profile', require('./profile'));
router.use('/projects', require('./projects'));

module.exports = router;
