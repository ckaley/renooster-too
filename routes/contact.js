// dependencies
var express = require('express');
var nodemailer = require('nodemailer');

// new router
var router = express.Router();

router.post('/', (req, res) => {
    // destructure request
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var tel = req.body.tel;
    var message = req.body.message;

    // create nodemailer transport
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS
        }
    });

    // define mail options
    var mailOptions = {
        to: process.env.EMAIL,
        subject: 'Message from my contact form',
        text: firstName + ' ' + lastName + ' | ' + email + ' | ' + tel + ' | ' + message,
        html: '<p>' + firstName + ' ' + lastName + '</p>' + '<p>' + email + '</p>' + '<p>' + tel + '</p>' + '<p>' + message + '</p>'
    };

    // send mail
    transporter.sendMail(mailOptions, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'falied to send message', err });
        }
        res.status(200).json({ message: 'message sent', result });
    });
});

// export router
module.exports = router;
