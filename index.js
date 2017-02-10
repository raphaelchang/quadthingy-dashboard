// Load required packages
var express = require('express');
var http = require('http');
var app = express();
var server = app.listen(3000);
var compression = require('compression');
var io = require('socket.io').listen(server);
var serialport = require('serialport');
var SerialPort = serialport.SerialPort;
var fb = require('float-bits');

// Add content compression middleware
app.use(compression());

// Add static middleware
app.use(express.static(__dirname + '/client'));
