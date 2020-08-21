// dependencies
var express = require('express');
var db = require('../models');

// new router
var router = express.Router();

router.get('/', (req, res) => {
    db.Project.find({})
        .then(projects => res.status(200).json(projects))
        .catch(err => res.status(404).json(err));
});

router.post('/', (req, res) => {
    db.Project.create(req.body)
        .then(project => res.status(200).json(project))
        .catch(err => res.status(422).json(err));
});

router.get('/:slug', (req, res) => {
    db.Project.findOne({ slug: req.params.slug })
        .then(project => res.status(200).json(project))
        .catch(err => res.status(404).json(err));
});

// export router
module.exports = router;
