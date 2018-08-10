var express = require('express');
var router = express.Router();
var path = require('path');
var database = require('../../bin/database');

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/user-count', function(req, res) {
    console.log(database.selectByDate(0, Infinity).length);
    console.log(database.selectByDate(Date.parse('2017-09-17 12:20:00'), Date.parse('2017-09-17 12:30:00')).length);
    res.send(JSON.stringify(
        database.selectByDate(
            Date.parse('2017-09-17 12:20:00'),
            Date.parse('2017-09-27 12:30:00')
        )
    ));
});

module.exports = router;
