// dependencies
var express = require('express');
var db = require('../models');

// new router
var router = express.Router();

router.get('/', (req, res) => {
    db.Subscription.find({})
        .then(subscriptions => res.status(200).json(subscriptions))
        .catch(err => res.status(404).json(err));
});

router.post('/', (req, res) => {
    db.Subscription.create(req.body)
        .then(subscription => res.status(200).json(subscription))
        .catch(err => res.status(422).json(err));
});

router.get('/:slug', (req, res) => {
    db.Subscription.findOne({ slug: req.params.slug })
        .then(subscription => res.status(200).json(subscription))
        .catch(err => res.status(404).json(err));
});

// export router
module.exports = router;
