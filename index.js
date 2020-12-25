// Load required packages
var express = require('express');
var http = require('http');
var app = express();
var server = app.listen(3000);
var handlebars = require('express-handlebars');
var browserify = require('browserify');
var babelify = require('babelify');
var ReactDOMServer = require('react-dom/server');
var compression = require('compression');
var io = require('socket.io').listen(server);
var serialport = require('serialport');
var SerialPort = serialport.SerialPort;
var React = require('react');
var fb = require('float-bits');
var App = require('./app/app.jsx');
require('node-jsx').install();

// Add content compression middleware
app.use(compression());

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

// Server-side rendering
app.get('/', function(req, res, next) {
    res.render('index', {
        reactHtml: ReactDOMServer.renderToString(React.createElement(App, {}))
    });
});

// Client-side rendering
app.use('/client.js', function(req, res) {
    res.setHeader('content-type', 'application/javascript');
    browserify('./app/index.jsx', {
        debug: true
    })
    .transform([babelify.configure({
    })])
    .bundle()
    .pipe(res);
});

