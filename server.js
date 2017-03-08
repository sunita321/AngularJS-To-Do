

// Dependencies ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
var logger = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

var db = require('./db/dbconnection.js');
var Todo = require('./db/todos.model.js');

// Require the routes and use them
var routes = require('./api/apiRoutes');



// configuration ======================

app.use(express.static(__dirname + '/app'));
// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(bodyParser.json({ type: 'application/*+json' }));
//app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
//app.use(bodyParser.text({ type: 'text/html' }));

// Import routes
app.use('/', routes);

// Launch App
var port = process.env.PORT || 3000;


app.listen(port, function()
{
  console.log('Running on port: ' + port);
});
