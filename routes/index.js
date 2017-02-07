var express = require('express');
var router = express.Router();
 
var contentModel = require("../models/content")

router.get(/home/, function(req, res, next) {
    console.log("helll", req.path)
     var temps = req.path.substring(5).split('/')
     var subpaths = ''
     for (var i = 0; i < temps.length; i++) {
        if (temps[i])
        {
            subpaths += i + '=' + temps[i]
        }  
    }
    if (subpaths) {
        console.log('here________')
        // res.render('index', { title: 'Express' });
        res.redirect('/home?'+subpaths);
        return
    }
    res.render('index', {title: 'Express'});
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});
// router.get('/home', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/contents', contentModel.getAllContents);
router.get('/examples', contentModel.getAllContents);
router.get('/content/:contentID', contentModel.getContent);
router.post('/login', function(req, res, next){
    var fs = require("fs");
    var files = fs.readdir("./", function(err, data){
        console.log(err, data)
        res.send(data);
    })
});

module.exports = router;
