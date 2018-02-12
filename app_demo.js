var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
/*middleware
var logger = function(req, res, next){
  console.log('logging....');
  
  next();
}
app.use(logger);
*/
//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//Set static path
app.use(express.static(path.join(__dirname, 'public')));

/*
app.get('/', function(req,res){
  //send plain text
  res.send('heo world');
});
*/
var people = [{
  name:'Jeff',
  age:20
},{
  name:'Sarah',
  age:22
},
{
  name:'Aah',
  age:33
}
]
app.get('/', function(req,res){
  res.json(people);
});
app.listen('3000', function(){
  console.log('Serverstarted on port 3000');
})

