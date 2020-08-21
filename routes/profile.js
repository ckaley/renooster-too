// dependencies
var express = require('express');
var db = require('../models');

// new router
var router = express.Router();

router.get('/', (req, res) => {
    db.Profile.findOne({})
        .then(profile => res.status(200).json(profile))
        .catch(err => res.status(404).json(err));
});

router.post('/', (req, res) => {
    db.Profile.create(req.body)
        .then(profile => res.status(200).json(profile))
        .catch(err => res.status(422).json(err));
});

// export router
module.exports = router;

