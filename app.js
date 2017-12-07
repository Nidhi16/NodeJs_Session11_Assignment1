var express = require('express');
var app = express();  
var jade = require('jade');

var port = process.env.PORT || 8000;

app.get('/', function(request, response) {
    // Calling jade API to render file
    var content = jade.renderFile('./views/index.jade', {'name': 'Nidhi Sinha'});
    // used express api send to send data
    response.status(200).send(content);
});

// Listen to desired port number
app.listen(port, function() {
    console.log("Listening on port " + port);
});