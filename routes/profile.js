var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
const context = {
title: 'Profile',
name: 'Thais',
age: 13,
gender: 'Female',
position: 'Student',
birth_day: 'July 31th',
birth_place: 'Chihuahua, Mexico',
hobbies: ['Xbox, Snapchat, Instagram, Tumblr, read books'],
}
res.render('profile', context);
});

module.exports = router;
