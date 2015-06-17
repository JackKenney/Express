//CLIENT SIDE SCRIPTS:

// Connect to server
var socket = io('/');
console.log(socket);

$(document).ready( function() {
//global client variables
var numUsers;

// Socket handlers for incoming server emissions:
//handler for initial connection information
socket.on('connected', function(data) { //{ 'numUsers':numUsers }
  console.log('connected');
  updateUC(data.numUsers);
  connected = true;
  log({ message:"Welcome! Please login", type:3 } );
});

// Necessary functions:
  var scroll = function() {
    chatArea.scrollTop($('li').last().position().top + $('li').last().height()); 
  }

}); //end document ready
