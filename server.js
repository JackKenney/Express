//Server
//Basic setup with express and socket.io:


var express = require('express'),
    app = express(),
    server = require( 'http' ).createServer( app ),
//sockets
    io = require('socket.io').listen(server),
// database
    mysql = require( 'mysql' ),
    connection = mysql.createConnection('mysql://root:sqlroot123@localhost/chatroom_accounts');

//server listens on port 1337
  var port = process.env.PORT || 1337;

server.listen(port, function() {
  console.log('Listening on ' + port);
});

//send page to address on req. to default directory
  app.use(express.static(__dirname + '/public'));

