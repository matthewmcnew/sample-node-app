var express = require('express');
const fs = require('fs')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Chicago Code Camp'});
});


/* GET home page. */
router.get('/security', function (req, res, next) {
    try {
        if (fs.existsSync("/home/pack/fix.txt")) {
            res.render('index', {title: 'All fixed!'});
            //file exists
        } else {
            res.render('index', {title: 'There is a security vulnerability!'});
        }
    } catch (err) {
        console.error(err)
    }

});

module.exports = router;
