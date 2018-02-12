var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var index = require('./routes/index');
var tasks = require('./routes/tasks');
var categories = require('./routes/categories');

var app = express();
//view engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

//set static folder
app.use(express.static(path.join(__dirname, 'client')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/categories', categories);
app.use('/',index);
app.use('/tasks',tasks);
app.listen('3000', function(){
  console.log('server started');
});

