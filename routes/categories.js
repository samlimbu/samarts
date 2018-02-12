var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db=mongojs('mongodb://admin:admin@ds012058.mlab.com:12058/mydatabase',['tasks','categories']);
var ObjectID = require('mongodb').ObjectID;   
router.get('/', function(req,res,next){
     db.categories.find(function(err, categories){
                if(err){
                          res.send(err);
                }
                res.json(categories);
     });
})
router.get('/:id', function(req,res,next){
     db.categories.findOne({_id: new ObjectID(req.params.id)}, function(err, categories){
                if(err){
                          res.send(err);
                }
                res.json(categories);
     });
})

router.get('/id/:cid', function(req,res,next){
     db.categories.findOne({id: new ObjectID(req.params.cid)}, function(err, categories){
                if(err){
                          res.send(err);
                }
                res.json(categories);
     });
})

module.exports=router;