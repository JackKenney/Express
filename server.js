//SERVER
//basic setup w/ express and io
var express = require('express'),
    app = express(),
    http = require( 'http' ).Server( app ),
//sockets
    io = require('socket.io')(http),
//database
    mysql = require( 'mysql' ),
    connection = mysql.createConnection('mysql://root:sqlroot123@localhost/test');
//server listens on port 1337
http.listen(1337);


//connect to database
connection.connect();
console.log('Connection to Database  Established!');

io.on('connection', function(socket) {
  console.log('Connection to Client Established!');

});


//send page to address on req. to default directory
  app.use(express.static(__dirname + '/public'));

