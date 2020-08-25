// dependencies
var express = require('express');
var db = require('../models');

// new router
var router = express.Router();

router.get('/', (req, res) => {
    console.log("Budget Tracker Route");
    // db.Profile.findOne({})
    //     .then(profile => res.status(200).json(profile))
    //     .catch(err => res.status(404).json(err));
});

// export router
module.exports = router;
