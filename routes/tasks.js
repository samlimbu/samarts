var express = require('express');
var router = express.Router();
var mongojs=require('mongojs');
var db=mongojs('mongodb://admin:admin@ds012058.mlab.com:12058/mydatabase',['tasks','categories']);

//get all
router.get('/', function(req,res,next){
         db.tasks.find(function(err, tasks){
                    if(err){
                              res.send(err);
                    }
                    res.json(tasks);
         });
})

//get single
router.get('/:id', function(req,res,next){
          db.tasks.findOne({_id: mongojs.ObjectId(req.param.id)}, function(err, task){
                     if(err){
                               res.send(err);
                     }
                     res.json(task);
          });
 })
 router.post('/task', function(req,res,next){
           var task = req.body;
           if(!task.title||(task.isDone+'')){
                     res.status(400);
                     res.json({
                               "error":"bad data"
                     });
           }else{
                db.tasks.save(task, function(err, task){
                    res.json(task);
                });
           }
 });
module.exports = router;