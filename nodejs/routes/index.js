var express = require('express');
var router = express.Router();
var contentModel = require("../models/content")

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contents', contentModel.getAllContents);

router.get('/content/:contentID', contentModel.getContent);
router.post('/login', function(req, res, next){
    var fs = require("fs");
    var files = fs.readdir("./", function(err, data){
        console.log(err, data)
        res.send(data);
    })
});

module.exports = router;
